const countEl = document.getElementById('countviews');

updateVisiteCount();

function updateVisiteCount(){
	fetch ('https://api.countapi.xyz/update/abjeeetvp/website?amount=1')
		.then(res => res.json())
		.then(res => {
				countEl.innerHTML = res.value;
		});
}