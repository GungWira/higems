
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');
    const rangeValue = document.getElementById('range-value');
    const minSliderMob = document.getElementById('min-slider-mob');
    const maxSliderMob = document.getElementById('max-slider-mob');
    const rangeValueMob = document.getElementById('range-value-mob');

    function updateRange() {
        const minValue = parseInt(minSlider.value);
        const maxValue = parseInt(maxSlider.value);
        
        if (minValue >= maxValue) {
            minSlider.value = maxValue - 1000; 
        }
        
        rangeValue.textContent = `Rp ${formatRupiah(minSlider.value)} - Rp ${formatRupiah(maxSlider.value)}`;
    }

    function updateRangeMob() {
        const minValue = parseInt(minSliderMob.value);
        const maxValue = parseInt(maxSliderMob.value);
        
        if (minValue >= maxValue) {
            minSliderMob.value = maxValue - 1000; 
        }
        
        rangeValueMob.textContent = `Rp ${formatRupiah(minSliderMob.value)} - Rp ${formatRupiah(maxSliderMob.value)}`;
    }

    function formatRupiah(value) {
        return parseInt(value).toLocaleString('id-ID');
    }

    minSlider.addEventListener('input', updateRange);
    maxSlider.addEventListener('input', updateRange);
    minSliderMob.addEventListener('input', updateRangeMob);
    maxSliderMob.addEventListener('input', updateRangeMob);

    updateRange();

    const cards = document.querySelectorAll(".content .container .rightSide .boxCard .card")
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            document.location.href = "package.detail.html"
        })
    })

    document.querySelector(".content .container .rightSide .coverTop .rightTop .sort").addEventListener("click", () => {
        document.querySelector(".filter_mobile").style.left = "0%"
    })
    document.querySelector(".filter_mobile").addEventListener("click", (e) => {
        if (e.target.classList.contains("clss")){
            document.querySelector(".filter_mobile").style.left = "-120%"
        }
    })
    document.querySelector(".filter_mobile .covers .topSide button").addEventListener("click", () => {
        document.querySelector(".filter_mobile").style.left = "-120%"
    })