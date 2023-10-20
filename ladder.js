let tog = 1
let rollingSound = new Audio('SnakesAndLadder_rpg-dice-rolling-95182.mp3')
let winSound = new Audio('SnakesAndLadder_winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum

    // snake and ladder  number movement for player 1

    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 4) {
            p1sum = 25
        }
        if (p1sum == 13) {
            p1sum = 46
        }
        if (p1sum == 33) {
            p1sum = 49
        }
        if (p1sum == 50) {
            p1sum = 69
        }
        if (p1sum == 54) {
            p1sum = 31
        }
        if (p1sum == 27) {
            p1sum = 5
        }
        if (p1sum == 40) {
            p1sum = 3
        }
        if (p1sum == 43) {
            p1sum = 18
        }
        if (p1sum == 89) {
            p1sum = 53
        }
        if (p1sum == 62) {
            p1sum = 81
        }
        if (p1sum == 74) {
            p1sum = 92
        }
        if (p1sum == 42) {
            p1sum = 63
        }
        if (p1sum == 76) {
            p1sum = 58
        }
        if (p1sum == 99) {
            p1sum = 41
        }
        if (p1sum == 66) {
            p1sum = 45
        }
        if (p1sum == 56) {
            p1sum = 31
        }
        

        sum = p1sum


//snake and  ladder number movement for player 2

    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        
        if (p1sum == 4) {
            p1sum = 25
        }
        if (p1sum == 13) {
            p1sum = 46
        }
        if (p1sum == 33) {
            p1sum = 49
        }
        if (p1sum == 50) {
            p1sum = 69
        }
        if (p1sum == 54) {
            p1sum = 31
        }
        if (p1sum == 27) {
            p1sum = 5
        }
        if (p1sum == 40) {
            p1sum = 3
        }
        if (p1sum == 43) {
            p1sum = 18
        }
        if (p1sum == 89) {
            p1sum = 53
        }
        if (p1sum == 62) {
            p1sum = 81
        }
        if (p1sum == 74) {
            p1sum = 92
        }
        if (p1sum == 42) {
            p1sum = 63
        }
        if (p1sum == 76) {
            p1sum = 58
        }
        if (p1sum == 99) {
            p1sum = 41
        }
        if (p1sum == 66) {
            p1sum = 45
        }
        if (p1sum == 56) {
            p1sum = 31
        }

      
        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1
})