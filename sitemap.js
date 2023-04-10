/**
 * sitemap.xmlの生成
 */
const sitemap = require('nextjs-sitemap-generator')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config()

// build idの取得
// NOTE：動的に生成されるページに対して内部的にbuild idを設定しているようなのでこちらで適用するわけでもないが、取得のみしておく
// https://github.com/IlusionDev/nextjs-sitemap-generator#usage-with-getstaticpaths
const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString()

sitemap({
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
  pagesDirectory: __dirname + '/.next/server/pages',
  targetDirectory: 'public/',
  ignoredExtensions: ['map', 'json'],
  ignoredPaths: [
    '[id]',
    '[[...index]]',
    '[...index]',
    'complete',
    '404',
    '500',
    'page',
    'category',
    'tag',
    'search',
    'preview',
  ],
  // root page options
  ignoreIndexFiles: true,
})
  .then(() => {
    console.log(`✅ sitemap.xml generated!`)
  })
  .catch((err) => {
    console.log(`sitemap.xml failed...`)
    console.log(err)
  })
