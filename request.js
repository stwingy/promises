//headers: { 'X-Auth-Token': '2e301bb00c2a4c2da6db74d2e15d4a14' }
//https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED
const myHeaders = new Headers();
myHeaders.append('X-Auth-Token', '2e301bb00c2a4c2da6db74d2e15d4a14');

fetch('https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED', {
	headers: myHeaders,
	dataType: 'json'
})
	.then((res) => {
		if (!res.ok) {
			//console.log('ERROR', res.status);
			throw new Error(res.status);
		} else {
			return res.json();
		}
	})
	.then((data) => {
		console.log(data);
		console.log(data.matches[0].homeTeam.id);
		return fetch(`https://api.football-data.org/v2/teams/${data.matches[0].homeTeam.id}/matches?status=SCHEDULED`, {
			headers: myHeaders,
			dataType: 'json'
		});
	})
	.then((res) => {
		console.log('res', res);
		if (!res.ok) {
			//console.log('ERROR', res.status);
			throw new Error(res.status);
		} else {
			return res.json();
		}
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err ? err : 'NETWORK DOWN');
	});
