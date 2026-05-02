const actions = {
	attack: 0,
	block: 1
};

const specials = {
	none: 0,
	gilded: 1,
	chica: 2,
	foxy: 3,
	bonnie: 4
};

const colors = {
	normal: "white",
	crit: "darkorange",
	miss: "orchid",
	gilded: "goldenrod"
};

const div_list = [
	"div_menu",
	"div_battle_end_button",
	"div_battle_enemy",
	"div_battle_player",
	"div_battle_buttons",
	"div_battle_textbox"
];

const states = {
	menu: {
		bg_color: "black",
		div_menu: true,
		div_battle_end_button: false,
		div_battle_enemy: false,
		div_battle_player: false,
		div_battle_buttons: false,
		div_battle_textbox: false
	},
	battle: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_end_button: false,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: true,
		div_battle_textbox: true
	},
	battle_end: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_end_button: true,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: false,
		div_battle_textbox: true
	}
};

const enemies = {
	c_deer: {
		name: "CORRUPT DEER",
		name_long: "<b>CORRUPT DEER</b>",
		name_short: "<b>C. DEER</b>",
		location: "WEST FOREST",
		hp: 20,
		atk: 2,
		crit: 0,
		miss: 20,
		spawn: 50,
		reward: 10,
		weight: 60,
		special: specials.none
	},
	c_hawk: {
		name: "CORRUPT HAWK",
		name_long: "<b>CORRUPT HAWK</b>",
		name_short: "<b>C. HAWK</b>",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 33,
		reward: 15,
		weight: 40,
		special: specials.none
	},
	c_hog: {
		name: "CORRUPT HEDGEHOG",
		name_long: "<b>CORRUPT HEDGEHOG</b>",
		name_short: "<b>C. HEDGEHOG</b>",
		location: "WEST FOREST",
		hp: 50,
		atk: 3,
		crit: 10,
		miss: 15,
		spawn: 17,
		reward: 25,
		weight: 19,
		special: specials.none
	},
	g_hawk: {
		name: "GILDED HAWK",
		name_long: "<b><span style='color: " + colors.gilded + ";'>GILDED HAWK</span></b>",
		name_short: "<b><span style='color: " + colors.gilded + ";'>G. HAWK</span></b>",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded
	}
};

const locations = {
	wf: {
		name: "WEST FOREST",
		color: "saddlebrown",
		enemies: [
			"c_deer",
			"c_hawk",
			"c_hog",
			"g_hawk"
		]
	}
};

let player = {
	name: "POPGOES THE WEASEL",
	name_long: "<b>POPGOES THE WEASEL</b>",
	name_short: "<b>POPGOES</b>",
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
	enemy_status_text: "",
	player_hp: 0,
	player_status_text: "",
	turn_count: 1
};

let global_output_text = "error: global_output_text";

function randbool(random_odds) {
	return Math.random() < random_odds;
}

function body_onload() {
	change_state(states.menu);
	display_update();
}

function change_state(new_state) {
	div_list.forEach((i) => document.getElementById(i).style.display = new_state[i] ? "block" : "none");
	if (new_state.bg_color == "!AREA") {
		document.body.style.backgroundColor = locations[player.location].color;
	} else {
		document.body.style.backgroundColor = new_state.bg_color;
	}
}

function display_update() {
	document.getElementById("text_stats_name").innerHTML = player.name_long;
	
	document.getElementById("text_enemy_name").innerHTML = battle.enemy.name_long;
	document.getElementById("text_enemy_atk").innerHTML = "ATK: <b>" + battle.enemy.atk + "</b>";
	document.getElementById("div_enemy_hp_bar").style.width = (100 * battle.enemy_hp / battle.enemy.hp) + "%";
	document.getElementById("text_enemy_hp").innerHTML = "HP: <b>" + battle.enemy_hp + "/" + battle.enemy.hp + "</b>";
	document.getElementById("text_enemy_status").innerHTML = battle.enemy_status_text;
	document.getElementById("text_player_name").innerHTML = player.name_long;
	document.getElementById("text_player_atk").innerHTML = "ATK: <b>" + player.atk + "</b>";
	document.getElementById("div_player_hp_bar").style.width = (100 * battle.player_hp / player.hp) + "%";
	document.getElementById("text_player_hp").innerHTML = "HP: <b>" + battle.player_hp + "/" + player.hp + "</b>";
	document.getElementById("text_player_status").innerHTML = battle.player_status_text;
	document.getElementById("text_output").innerHTML = global_output_text;
}

function output_text(newest_text_output) {
	global_output_text += "* " + newest_text_output + "<br>"
};

function output_text_silent(newest_text_output) {
	global_output_text += newest_text_output + "<br>"
};

function clear_output_text() {
	global_output_text = "";
};

function generate_enemy(location) {
	let enemy_list = locations[location].enemies;
	let weight_sum = 0;
	enemy_list.forEach((i) => weight_sum += enemies[i].weight);
	let weight_index = Math.random() * weight_sum;
	let enemy_chosen = false;
	enemy_list.forEach((i) => {
		if (!enemy_chosen && weight_index < enemies[i].weight) {
			battle.enemy = enemies[i]
			enemy_chosen = true;
		} else {
			weight_index -= enemies[i].weight;
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
	output_text(player.name_short + " ENCOUNTERED " + battle.enemy.name_long);
	display_update();
}

function turn_hander(player_action) {
	clear_output_text();
	let enemy_damaged = 0;
	let player_damaged = 0;
	
	let blocking = false;
	if (player_action == actions.attack) {
		output_text(player.name_short + " ATTACKED " + battle.enemy.name_long);
		enemy_damaged = player.atk;
		if (randbool(player.crit / 100)) {
			enemy_damaged *= 3;
			output_text("<b><span style='color: " + colors.crit + ";'>CRIT!</span></b>");
		}
		battle.enemy_hp -= enemy_damaged;
		output_text(battle.enemy.name_long + " LOST <b>" + enemy_damaged + "</b> HP");
	}
	if (player_action == actions.block) {
		blocking = true;
		output_text(player.name_short + " BLOCKED");
	}
	output_text_silent("");
	
	if (battle.enemy_hp <= 0) {
		battle.enemy_hp = 0;
		change_state(states.battle_end);
		output_text("<b>YOU WIN!</b>");
		output_text("PRIZE: <b>" + battle.enemy.reward + "</b> COINS");
	} else {
		/*if (battle.enemy.special == specials.chica && battle.turn_count % 3 == 0) {
			//boss actions
		} else {*/
			if (!battle.enemy_charging && randbool(battle.enemy.crit / 100)) {
				battle.enemy_charging = true;
  				output_text(battle.enemy.name_long + " IS <b><span style='color: " + colors.crit + ";'>CHARGING...</span></b>");
			} else {
				output_text(battle.enemy.name_long + " ATTACKED " + player.name_short);
				if (randbool(battle.enemy.miss / 100)) {
					output_text("<b><span style='color: " + colors.miss + ";'>MISS!</span></b>");
				} else {
					player_damaged = battle.enemy.atk;
					if (blocking) {
						player_damaged /= 2;
						output_text("<b>BLOCK!</b>");
					}
					if (battle.enemy_charging) {
						player_damaged *= 3;
						output_text("<b><span style='color: " + colors.crit + ";'>CRIT!</span></b>");
					}
					player_damaged = Math.round(player_damaged);
					battle.player_hp -= player_damaged;
					output_text(player.name_short + " LOST <b>" + player_damaged + "</b> HP");
				}
				battle.enemy_charging = false;
			}
		//}
		if (battle.player_hp <= 0) {
			battle.player_hp = 0;
			change_state(states.battle_end);
			output_text_silent("");
			output_text("<b>YOU LOSE...</b>");
		}
	}
	
	if (battle.enemy_charging) {
		battle.enemy_status_text = "<b><span style='color: " + colors.crit + ";'>CHARGING...</span></b>";
	} else {
		battle.enemy_status_text = "";
	}
	
	battle.turn_count++;
	output_text_silent("");
	output_text_silent("dev: current turn: " + battle.turn_count);
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
	output_text_silent("NAME: " + battle.enemy.name_long);
	output_text_silent("LOCATION: <b>" + battle.enemy.location + "</b>");
	output_text_silent("HP: <b>" + battle.enemy.hp + "</b>");
	output_text_silent("ATK: <b>" + battle.enemy.atk + "</b>");
	output_text_silent("CRIT: <b>" + battle.enemy.crit + "</b>%");
	output_text_silent("MISS: <b>" + battle.enemy.miss + "</b>%");
	output_text_silent("SPAWN: <b>" + battle.enemy.spawn + "</b>%");
	output_text_silent("REWARD: <b>" + battle.enemy.reward + "</b> COINS");
	display_update();
}

function btn_battle_back() {
	change_state(states.menu);
}

function btn_dev_load_battle() {
	generate_enemy(player.location);
	battle_reset();
}

function btn_dev_min_stats() {
	player.hp = 30;
	player.atk = 4;
}

function btn_dev_max_stats() {
	player.hp = 300;
	player.atk = 30;
}