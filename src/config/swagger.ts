import swaggerJSDoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 4000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Obelisco API',
    version: '1.0.0',
    description: 'Documentación Obelisco API',
  },
  servers: [
    { 
			url: `http://localhost:${PORT}`, // Cambiar en producción
    },
  ],
  components: {
    schemas: {
      Phone: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          number: { type: 'string' },
        },
      },
      SocialMedia: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          url: { type: 'string' },
          icon: { type: 'string' },
        },
      },
      Link: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
      Image: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          alt: { type: 'string' },
          url: { type: 'string' },
        },
      },
      FooterCompleto: {
        type: 'object',
        properties: {
          phones: {
            type: 'array',
            items: { $ref: '#/components/schemas/Phone' },
          },
          socialMedia: {
            type: 'array',
            items: { $ref: '#/components/schemas/SocialMedia' },
          },
          links: {
            type: 'array',
            items: { $ref: '#/components/schemas/Link' },
          },
          images: {
            type: 'array',
            items: { $ref: '#/components/schemas/Image' },
          },
        },
      },
      FooterLegales: {
        type: 'object',
        properties: {
          links: {
            type: 'array',
            items: { $ref: '#/components/schemas/Link' },
          },
          images: {
            type: 'array',
            items: { $ref: '#/components/schemas/Image' },
          },
        },
      },
			Component: {
				type: 'object',
				properties: {
					code: { type: 'string' },
				},
			},
    },
  },
};

export const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./src/controllers/**/*.ts'], // Rutas donde están los JSDoc
});
