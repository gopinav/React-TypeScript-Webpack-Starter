interface image 
{
  src: string | undefined,
  srcSet: string | undefined,
  width: string | number | undefined,
  height: string | number | undefined
};

const imageContent: image;

declare module "*.png" { export default imageContent; }
declare module "*.jpg" { export default imageContent; }
declare module "*.jpeg" { export default imageContent; }
declare module "*.webp" { export default imageContent; }

declare module "*.gif"

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.ttf"
declare module "*.html"
