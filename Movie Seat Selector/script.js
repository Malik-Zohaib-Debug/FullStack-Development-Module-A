const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

let ticketPrice = +movie.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
}

function setMovieData(moviePrice, movieIndex){
    localStorage.setItem('selectedMoviePrice', moviePrice);
    localStorage.setItem('selectedMovieIndex', movieIndex);
}

container.addEventListener('click', e => {
    if(movie.value !== '') {
        if(e.target.classList.contains('seat') && 
            !e.target.classList.contains('occupied')){
            
                e.target.classList.toggle('selected');
                updateSelectedCount();
        }
    }
})

movie.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.value, e.target.selectedIndex);
    updateSelectedCount();
})