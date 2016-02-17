import { PlaneGeometry, MeshBasicMaterial, Mesh, Texture, DoubleSide } from 'three'

export function textSprite(text, params) {
  const family = "Helvetica"
  const size = 18
  const color = "#676767"
  const font = "bold " + size + "px " + family

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  context.font = font

  // get size data (height depends only on font size)
  const metrics = context.measureText(text)
  const textWidth = metrics.width

  canvas.width = textWidth + 3
  canvas.height = size + 3

  context.font = font
  context.fillStyle = color
  context.fillText(text, 0, size + 3)

  // canvas contents will be used for a texture
  const texture = new Texture(canvas)
  texture.needsUpdate = true

  const mesh = new Mesh(
  new PlaneGeometry(canvas.width, canvas.height),
  new MeshBasicMaterial({
    map: texture,
    side: DoubleSide
  }))

  console.log(canvas.width + 'x' + canvas.height)
  console.log(texture)
  console.log(mesh)

  return mesh
}

import { SpriteMaterial, Sprite, LinearFilter } from 'three'

export function createSprite(message, options) {
  const fontsize =  options.fontsize || 16
  const family =    options.family || 'Arial'
  const color =     options.color || 'rgba(255,255,255,1)'

  const fontSettings = `${fontsize}px ${family}`

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.font = fontSettings

  // setting canvas width/height before ctx draw, else canvas is empty
  canvas.width = ctx.measureText(message).width
  // canvas.height = fontsize * 2 // fontsize * 1.5
  canvas.height = canvas.width // fontsize * 1.5

  // after setting the canvas width/height we have to re-set font to apply!?! looks like ctx reset
  ctx.font = fontSettings
  ctx.fillStyle = color
  ctx.fillText(message, 0, fontsize)

  const texture = new Texture(canvas)
  texture.minFilter = LinearFilter // NearestFilter
  texture.needsUpdate = true

  const spriteMaterial = new SpriteMaterial({map : texture})
  const sprite = new Sprite(spriteMaterial)
  return sprite
}
