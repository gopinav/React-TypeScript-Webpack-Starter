/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, shallow } from "enzyme";
import { HandleAppState } from "../web/react/HandleAppState";
import { act } from "react-dom/test-utils";

const snackbar = "WithStyles(ForwardRef(Snackbar))"; 


describe("HandleAppState Component", () => 
{
    let wb;

    beforeEach(() => 
    {
        wb = {
            addEventListener: (prop: string | number, callback: () => void) => wb[prop] = callback,
            messageSkipWaiting: jest.fn(),
            waiting: () => null,
            controlling: () => null 
        };
    });

    afterEach(() => 
    {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    it("should render correctly by default", () => expect(shallow(<HandleAppState wb={wb} />)).toMatchSnapshot() );

    describe("Should handle service worker states", ()=>
    {
        it("Update sw and hide snackbar on button click.", () => 
        {
            const warper = mount(<HandleAppState wb={wb} />);

            act(() => wb.waiting());
            warper.update();

            expect(warper.children(snackbar).first().prop("open")).toBe(true);

            warper.find("button").first().simulate("click");
        
            expect(wb.messageSkipWaiting).toBeCalled();
            expect(warper.children(snackbar).first().prop("open")).toBe(false);

            warper.unmount();
        });

        it("Close without updating after a minute.", () => 
        {
            jest.useFakeTimers();

            const warper = mount(<HandleAppState wb={wb} />);

            act(wb.waiting);
            warper.update();

            expect(warper.children(snackbar).first().prop("open")).toBe(true);

            act(() => (jest.advanceTimersByTime(60 * 1000), undefined));
            warper.update();
        
            expect(wb.messageSkipWaiting).toHaveBeenCalledTimes(0);
            expect(warper.children(snackbar).first().prop("open")).toBe(false);

            warper.unmount();
        });

    });

    describe("Should handle connectivity states", ()=> 
    {
        let functions = {};

        beforeEach(() => 
        {
            functions = {};
            jest.spyOn(window, "addEventListener").mockImplementation((type, fn) => (functions[type] = fn));
        });

        function setOnlineState(isOnline: boolean) 
        {
            jest.spyOn(navigator, "onLine", "get").mockReturnValue(isOnline);

            const toCall = (isOnline ? functions["online"] : functions["offline"]);

            if(toCall) act(toCall);
        }

        it("Should show snackbar when loading in offline mode.", () => 
        {
            setOnlineState(false);
            expect(shallow(<HandleAppState wb={wb} />)).toMatchSnapshot();
        });

        it("Should hide offline 10 seconds after loading in offline mode", () => 
        {
            jest.useFakeTimers();
            setOnlineState(false);

            const warper = mount(<HandleAppState wb={wb} />);

            expect(warper.children(snackbar).at(1).prop("open")).toBe(true);

            act(() => (jest.advanceTimersByTime(10 * 1000), undefined));
            warper.update();

            expect(warper.children(snackbar).at(1).prop("open")).toBe(false);

            warper.unmount();
        });

        it("Should toggle online and offline states correctly", () => 
        {
            const warper = shallow(<HandleAppState wb={wb} />);

            setOnlineState(false);
            warper.update();

            expect(warper.children(snackbar).at(1).prop("open")).toBe(true);
            expect(warper.find("Alert").first().prop("severity")).toBe("error");

            setOnlineState(true);
            warper.update();

            expect(warper.children(snackbar).at(1).prop("open")).toBe(true);
            expect(warper.find("Alert").first().prop("severity")).toBe("success");

            warper.unmount();
        });
    });

});
