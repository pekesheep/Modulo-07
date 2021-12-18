// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

var randomSchedule = (team, hours) => {
  for (var member of team) {
    console.log("Disponibilidad de", member.name);
    for (var i = 0; i < member.availability.length; i++) {
      member.availability[i] = Math.floor(Math.random() * 2) < 0.5 ? 'No' : 'Si';
      console.log(hours[i], member.availability[i]);
    }
  }
}

randomSchedule(myTeam, WORK_HOURS);

var disponibility = (member, hours) => {
  teamLeader = member[0];
  for (var i = 0; i < teamLeader.availability.length; i++) {
    if (teamLeader.availability[i] === 'Si') {
      for (var control = 1; control < member.length; control++) {
        if (member[control].availability[i] === 'No') break;
      }
      if (control === member.length) return console.log("Hueco encontrado en el horario:", hours[i]);
    }

  }
  console.log("Lo siento, no hay hueco disponible en el equipo.");
}

disponibility(myTeam, WORK_HOURS);