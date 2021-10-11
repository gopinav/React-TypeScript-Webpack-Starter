const { isProduction } = require('./env');
const { resolvePath } = require('./paths')

module.exports = {
  alias: {
    'react-redux': isProduction ? 'react-redux' : 'react-redux/lib',
    '@assets': resolvePath('src/assets'),
    '@utils': resolvePath('src/utils'),
    '@components': resolvePath('src/components'),
    '@declarations': resolvePath('src/declarations'),
    '@constants': resolvePath('src/constants'),
    '@services': resolvePath('src/services'),
    '@layouts': resolvePath('src/layouts'),
    '@helpers': resolvePath('src/helpers'),
    '@hooks': resolvePath('src/hooks'),
    '@pages': resolvePath('src/pages'),
    '@rootRedux': resolvePath('src/rootRedux'),
    '@config': resolvePath('src/config'),
    '@src': resolvePath('src'),
  },
};