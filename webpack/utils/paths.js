const { resolve } = require('path');
const { realpathSync, existsSync } = require('fs');
const { isProduction, isDevelopment } = require('./env')
const getPublicUrlOrPath = require('../helpers/getPublicUrlOrPath')


const appDirectory = realpathSync(process.cwd());
const fileExtensions = [ 'js', 'ts', 'tsx', 'jsx'];


function resolvePath (relativePath) {
  return resolve(appDirectory, relativePath);
}

function resolveModule(resolveFn, filePath) {
  const extension = fileExtensions.find(ext =>
    existsSync(resolveFn(`${filePath}.${ext}`))
  );

  return extension
    ? resolveFn(`${filePath}.${extension}`)
    : resolveFn(`${filePath}.js`);
}


// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  isDevelopment,
  require(resolvePath('package.json')).homepage,
  process.env.PUBLIC_URL
);


const paths = {
  dotenv: resolvePath('.env'),
  appPath: resolvePath('.'),
  appBuild: resolvePath('build'),
  appPublic: resolvePath('public'),
  appHtml: resolvePath('public/index.html'),
  appFavicon: resolvePath('public/favicon.ico'),
  appManifest: resolvePath('public/manifest.json'),
  appIndexJs: resolveModule(resolvePath, 'src/index'),
  appPackageJson: resolvePath('package.json'),
  appSrc: resolvePath('src'),
  appTsConfig: resolvePath('tsconfig.json'),
  appJsConfig: resolvePath('jsconfig.json'),
  yarnLockFile: resolvePath('yarn.lock'),
  testsSetup: resolveModule(resolvePath, 'src/setupTests'),
  proxySetup: resolvePath('src/setupProxy.js'),
  appNodeModules: resolvePath('node_modules'),
  publicUrlOrPath,
}


const outputs = {
  filename: isProduction
    ? 'static/js/[name].[contenthash:8].bundle.js'
    : 'static/js/[name].bundle.js'
  ,
  chunkFilename: isProduction
    ? 'static/js/[name].[contenthash:8].chunk.js'
    : 'static/js/[name].chunk.js'
  ,
  assetModuleFilename: 'static/media/[name].[contenthash:8].[ext]',
}


module.exports = {
  fileExtensions,
  outputs,
  resolvePath,
  paths,
}