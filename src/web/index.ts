class WebGLPlayGround {
	gl: WebGL2RenderingContext | null

	constructor(canvas: HTMLCanvasElement) {
		console.log(canvas)
		this.gl = canvas.getContext("webgl2")
		if (this.gl === null) {
			console.error("Error obtaining webgl2 context")
		}
	}

	run() {
		if (!this.gl) { return }
		const gl = this.gl;

		gl.clearColor(1, 0, 0, 1)
		gl.clear(gl.COLOR_BUFFER_BIT)
	}
}

export  {
	WebGLPlayGround
}