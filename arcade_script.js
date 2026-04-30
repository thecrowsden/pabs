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
	battle_start: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_end_button: false,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: true,
		div_battle_textbox: false
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
		color: "saddlebrown",
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
};

let player = {
	name_long: "POPGOES THE WEASEL",
	name_short: "POPGOES",
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
	div_list.forEach((i) => document.getElementById(i).style.display = new_state[i] ? "block" : "none");
	if (new_state.bg_color == "!AREA") {
		document.body.style.backgroundColor = locations[player.location].color;
	} else {
		document.body.style.backgroundColor = new_state.bg_color;
	}
}

function display_update() {
	document.getElementById("text_enemy_name").innerHTML = battle.enemy.name;
	document.getElementById("text_enemy_name").style.color = battle.enemy.special == specials.gilded ? colors.gilded : colors.normal;
	document.getElementById("text_enemy_hp").innerHTML = "HP: <b>" + battle.enemy_hp + "/" + battle.enemy.hp;
	document.getElementById("text_enemy_atk").innerHTML = "ATK: <b>" + battle.enemy.atk + "</b>";
	document.getElementById("text_player_name").innerHTML = player.name_long;
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
	change_state(states.battle_start);
	clear_output_text();
	display_update();
}

function turn_hander(player_action) {
	clear_output_text();
	change_state(states.battle);
	let damage_amount = 0;
	let blocking = false;
	if (player_action == actions.attack) {
		output_text("<b>" + player.name_short + "</b> ATTACKED <b>" + battle.enemy.name + "</b>");
		damage_amount = player.atk;
		if (randbool(player.crit / 100)) {
			damage_amount *= 3;
			output_text("<b><span style='color: " + colors.crit + ";'>CRIT!</span></b>");
		}
		battle.enemy_hp -= damage_amount;
		output_text("<b>" + battle.enemy.name + "</b> TOOK <b>" + damage_amount + "</b> DAMAGE");
	}
	if (player_action == actions.block) {
		blocking = true;
		output_text("<b>" + player.name_short + "</b> BLOCKED");
	}
	output_text("");
	
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
  				output_text("<b>" + battle.enemy.name + "</b> IS <b><span style='color: " + colors.crit + ";'>CHARGING</span></b>...");
			} else {
				output_text("<b>" + battle.enemy.name + "</b> ATTACKED <b>" + player.name_short + "</b>");
				if (randbool(battle.enemy.miss / 100)) {
					output_text("<b><span style='color: " + colors.miss + ";'>MISS!</span></b>");
				} else {
					damage_amount = battle.enemy.atk;
					if (blocking) {
						damage_amount /= 2;
						output_text("<b>BLOCK!</b>");
					}
					if (battle.enemy_charging) {
						damage_amount *= 3;
						output_text("<b><span style='color: " + colors.crit + ";'>CRIT!</span></b>");
					}
					damage_amount = Math.round(damage_amount);
					battle.player_hp -= damage_amount;
					output_text("<b>" + player.name_short + "</b> TOOK <b>" + damage_amount + "</b> DAMAGE");
				}
				battle.enemy_charging = false;
			}
		//}
		if (battle.player_hp <= 0) {
			battle.player_hp = 0;
			change_state(states.battle_end);
			output_text("");
			output_text("<b>YOU LOSE...</b>");
		}
	}
	output_text("");
	
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
	change_state(states.battle);
	output_text("NAME: <b>" + (battle.enemy.special == specials.gilded ? "<span style='color: " + colors.gilded + ";'>" : "") + battle.enemy.name + (battle.enemy.special == specials.gilded ? "</span>" : "") + "</b>");
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

function btn_dev_min_stats() {
	player.hp = 30;
	player.atk = 4;
}

function btn_dev_max_stats() {
	player.hp = 300;
	player.atk = 30;
}