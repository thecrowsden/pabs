const states = {
	menu: 0,
	battle: 1,
	battle_end: 2
}

const actions = {
	attack: 0,
	block: 1
}

const specials = {
	none: 0,
	gilded: 1
}

const enemies = {
	c_deer: {
		name: "CORRUPT DEER",
		location: "WEST FOREST",
		hp: 20,
		atk: 2,
		crit: 0,
		miss: 20,
		spawn: 50,
		reward: 10,
		special: specials.none
	},
	c_hawk: {
		name: "CORRUPT HAWK",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 33,
		reward: 15,
		special: specials.none
	},
	c_hog: {
		name: "CORRUPT HEDGEHOG",
		location: "WEST FOREST",
		hp: 50,
		atk: 3,
		crit: 10,
		miss: 15,
		spawn: 17,
		reward: 25,
		special: specials.none
	},
	g_hawk: {
		name: "GILDED HAWK",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 0.8,
		reward: 150,
		special: specials.gilded
	}
};

const locations = {
	wf: {
		name: "WEST FOREST",
		rates: [
			{
				id: "c_deer",
				rate: 60
			},
			{
				id: "c_hawk",
				rate: 40
			},
			{
				id: "c_hog",
				rate: 19
			},
			{
				id: "g_hawk",
				rate: 1
			}
		]
	}
}

let player = {
	name: "POPGOES THE WEASEL",
	hp: 30,
	atk: 4,
	crit: 10,
	location: "wf"
};

let battle = {
	enemy: {
		name: "error: battle.enemy.name",
		hp: 0,
		crit: 0,
		spawn: 0,
		atk: 0,
		miss: 0,
		reward: 0,
		special: 0
	},
	enemy_hp: 0,
	enemy_charging: false,
	player_hp: 0,
	turn_count: 1
};

let global_output_text = "error: global_output_text";

function randbool(random_odds) {
	return Math.random() < random_odds;
}

function change_state(new_state) {
	if (new_state == states.menu) {
		document.getElementById("div_menu").style.display = "block";
		document.getElementById("div_battle").style.display = "none";
		document.getElementById("div_battle_buttons").style.display = "none";
		document.getElementById("div_battle_end_button").style.display = "none";
	} else if (new_state == states.battle) {
		document.getElementById("div_menu").style.display = "none";
		document.getElementById("div_battle").style.display = "block";
		document.getElementById("div_battle_buttons").style.display = "block";
		document.getElementById("div_battle_end_button").style.display = "none";
	} else if (new_state == states.battle_end) {
		document.getElementById("div_menu").style.display = "none";
		document.getElementById("div_battle").style.display = "block";
		document.getElementById("div_battle_buttons").style.display = "none";
		document.getElementById("div_battle_end_button").style.display = "block";
	}
}

function display_update() {
	document.getElementById("text_enemy_name").innerHTML = battle.enemy.name;
	document.getElementById("text_enemy_name").style.color = battle.enemy.special == specials.gilded ? "gold" : "white";
	document.getElementById("text_enemy_hp").innerHTML = "HP: <b>" + battle.enemy_hp + "/" + battle.enemy.hp;
	document.getElementById("text_enemy_atk").innerHTML = "ATK: <b>" + battle.enemy.atk + "</b>";
	document.getElementById("text_player_name").innerHTML = player.name;
	document.getElementById("text_player_hp").innerHTML = "HP: <b>" + battle.player_hp + "/" + player.hp + "</b>";
	document.getElementById("text_player_atk").innerHTML = "ATK: <b>" + player.atk + "</b>";
	document.getElementById("text_output").innerHTML = global_output_text;
}

function output_text(newest_text_output) {
	global_output_text += newest_text_output + "<br>"
};

function clear_output_text() {
	global_output_text = "";
};

function generate_enemy(location) {
	let spawn_info = locations[location].rates;
	let weight_sum = 0;
	spawn_info.forEach((i) => weight_sum += i.rate);
	let weight_index = Math.random() * weight_sum;
	let enemy_chosen = false;
	spawn_info.forEach((i) => {
		if (!enemy_chosen && weight_index < i.rate) {
			battle.enemy = enemies[i.id]
			enemy_chosen = true;
		} else {
			weight_index -= i.rate;
		}
	});
}

function battle_reset() {
	battle.enemy_hp = battle.enemy.hp;
	battle.player_hp = player.hp;
	battle.enemy_charging = false;
	battle.turn_count = 1;
	change_state(states.battle);
	clear_output_text();
	display_update();
}

function turn_hander(player_action) {
	clear_output_text();
	let blocking = false;
	if (player_action == actions.attack) {
		output_text("<b>" + player.name + "</b> ATTACKED <b>" + battle.enemy.name + "</b>");
		let damage_amount = player.atk;
		if (randbool(player.crit / 100)) {
			damage_amount *= 3;
			output_text("<b>CRIT!</b>");
		}
		battle.enemy_hp -= player.atk;
		output_text("<b>" + battle.enemy.name + "</b> TOOK " + damage_amount + " DAMAGE");
		output_text("");
	}
	if (player_action == actions.block) {
		output_text("<b>" + player.name + "</b> BLOCKED");
		output_text("");
		blocking = true;
	}
	
	if (battle.enemy_hp <= 0) {
		output_text("<b>YOU WIN!</b>");
		output_text("PRIZE: " + battle.enemy.reward + " COINS");
		output_text("");
		battle.enemy_hp = 0;
		change_state(states.battle_end);
	} else {
		/*if (battle.enemy.special == specials.chica && battle.turn_count % 3 == 0) {
			//boss actions
		} else {*/
			//if (randbool())
	//}
	}
		
	battle.turn_count++;
	output_text("dev: current turn: " + battle.turn_count);
	display_update();
}

function btn_battle_attack() {
	turn_hander(actions.attack);
}

function btn_battle_block() {
	turn_hander(actions.block);
}

function btn_battle_info() {
	clear_output_text();
	output_text("NAME: <b>" + battle.enemy.name + "</b>");
	output_text("LOCATION: <b>" + battle.enemy.location + "</b>");
	output_text("HP: <b>" + battle.enemy.hp + "</b>");
	output_text("ATK: <b>" + battle.enemy.atk + "</b>");
	output_text("CRIT: <b>" + battle.enemy.crit + "</b>%");
	output_text("MISS: <b>" + battle.enemy.miss + "</b>%");
	output_text("SPAWN: <b>" + battle.enemy.spawn + "</b>%");
	output_text("REWARD: <b>" + battle.enemy.reward + "</b> COINS");
	display_update();
}

function btn_battle_back() {
	change_state(states.menu);
}

function btn_dev_load_battle() {
	generate_enemy(player.location);
	battle_reset();
}