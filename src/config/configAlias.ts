import moduleAlias from 'module-alias';
import path from 'path';

const basePath = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

moduleAlias.addAliases({
  '@models': path.join(__dirname, `../${basePath}/models`),
  '@utils': path.join(__dirname, `../${basePath}/utils`),
  '@routes': path.join(__dirname, `../${basePath}/routes`),
  '@controllers': path.join(__dirname, `../${basePath}/controllers`),
  '@config': path.join(__dirname, `../${basePath}/config`),
  '@middlewares': path.join(__dirname, `../${basePath}/middlewares`),
  '@services': path.join(__dirname, `../${basePath}/services`),
});
