function main() {
    // mengakses media untuk menggambar
    var canvas = document.getElementById('myCanvas');
    // alat untuk menggambar -> pensil, spidol, kuas, dll
    var gl = canvas.getContext('webgl');
    
    // mendefinisikan vertex
    var vertexShaderCode = `
    void main() {
        // posisi vertex
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        // size titiknya
        gl_PointSize = 10.0;
    }`;

    // membuat vertex shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // mendefinisikan fragment
    var fragmentShaderCode = `
    void main() {
        gl_FragColor = vec(1.0, 0.0, 0.0, 1.0);
    }`;

    // membuat fragment shader
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // package program -> compile
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // set warna background
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // clear background
    gl.clear(gl.COLOR_BUFFER_BIT);

    // instruksi untuk menggambar
    gl.drawArrays(gl.POINTS, 0, 1);
}