declare module 'ogl' {
  export class Renderer {
    constructor(options?: any)
    gl: WebGL2RenderingContext
    setSize(width: number, height: number): void
    render(args: any): void
  }
  export class Program {
    constructor(gl: WebGL2RenderingContext, params: any)
    uniforms: Record<string, { value: any }>
  }
  export class Mesh {
    constructor(gl: WebGL2RenderingContext, params: any)
  }
  export class Color {
    constructor(hex: string)
    r: number
    g: number
    b: number
  }
  export class Triangle {
    constructor(gl: WebGL2RenderingContext)
    attributes: Record<string, any>
  }
}
