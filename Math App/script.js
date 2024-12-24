for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    x = document.getElementById('user').textContent
    if (x !== '') {
        function area() {
            x = document.getElementById('len').value
            y = document.getElementById('bre').value
            x = parseInt(x)
            y = parseInt(y)
            j = x * y
            document.getElementById('re').textContent = j
            console.log(j)
        }
    }

    else if(x === '') {
        b = document.getElementById('reg').textContent = 'Register'
        c = document.getElementById('log').textContent = 'Login'
        document.getElementById('reg1').style.display = 'inline-block'
        document.getElementById('log1').style.display = 'inline-block'
    }

    function usernamecr() {
        x = document.getElementById('user').textContent = document.getElementById('log-u').value
    }
}
/* function area() {
    x = document.getElementById('len').value
    y = document.getElementById('bre').value
    x = parseInt(x)
    y = parseInt(y)
    j = x * y
    document.getElementById('re').textContent = j
    console.log(j)
} */