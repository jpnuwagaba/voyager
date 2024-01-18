import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from '@/schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-voyager',

  projectId: 'kipdc1bf',
  dataset: 'production',

  basePath: '/admin',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
