const stat_actions = {
	min: 0,
	minus: 1,
	plus: 2,
	max: 3,
};

const stat_id = {
	hp: 0,
	atk: 1,
	item: 2,
}

const actions = {
	attack: 0,
	block: 1,
	item: 2,
};

const items = {
	acorn: 0,
	fruit: 1,
	pizza: 2,
	atk: 3,
	def: 4,
	shield: 5,
};

const item_names = {
		0: "<b>ACORN</b>",
		1: "<b>FRUIT</b>",
		2: "<b>PIZZA</b>",
		3: "<b>ATK+</b>",
		4: "<b>DEF+</b>",
		5: "<b>SHIELD</b>",
}

const specials = {
	none: 0,
	gilded: 1,
	chica: 2,
	foxy: 3,
	bonnie: 4,
};

const colors = {
	normal: " style='color:white;'",
	heal: " style='color:chartreuse;'",
	crit: " style='color:darkorange;'",
	miss: " style='color:orchid;'",
	faded: " style='color:darkgray;'",
	heal_faded: " style='color:limegreen;'",
	gilded: " style='color:goldenrod;'",
};

const div_list = [
	"div_menu",
	"div_battle_win",
	"div_battle_lose",
	"div_battle_enemy",
	"div_battle_player",
	"div_battle_buttons",
	"div_battle_inv",
	"div_battle_textbox",
];

const states = {
	menu: {
		bg_color: "black",
		div_menu: true,
		div_battle_win: false,
		div_battle_lose: false,
		div_battle_enemy: false,
		div_battle_player: false,
		div_battle_buttons: false,
		div_battle_inv: false,
		div_battle_textbox: false,
	},
	battle: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_win: false,
		div_battle_lose: false,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: true,
		div_battle_inv: false,
		div_battle_textbox: true,
	},
	battle_inv: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_win: false,
		div_battle_lose: false,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: false,
		div_battle_inv: true,
		div_battle_textbox: true,
	},
	battle_win: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_win: true,
		div_battle_lose: false,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: false,
		div_battle_inv: false,
		div_battle_textbox: true,
	},
	battle_lose: {
		bg_color: "!AREA",
		div_menu: false,
		div_battle_win: false,
		div_battle_lose: true,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: false,
		div_battle_inv: false,
		div_battle_textbox: true,
	},
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
		special: specials.none,
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
		special: specials.none,
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
		special: specials.none,
	},
	g_hawk: {
		name: "GILDED HAWK",
		name_long: "<b" + colors.gilded + ">GILDED HAWK</b>",
		name_short: "<b" + colors.gilded + ">G. HAWK</b>",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded,
	},
};

const locations = {
	wf: {
		name: "WEST FOREST",
		color: "saddlebrown",
		enemies: [
			"c_deer",
			"c_hawk",
			"c_hog",
			"g_hawk",
		],
	},
};

let player = {
	name: "POPGOES THE WEASEL",
	name_long: "<b>POPGOES THE WEASEL</b>",
	name_short: "<b>POPGOES</b>",
	hp: 30,
	atk: 4,
	coins: 0,
	crit: 10,
	location: "wf",
	inv: [0, 0, 0, 0, 0, 0,],
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
		special: 0,
	},
	enemy_hp: 0,
	enemy_charging: false,
	enemy_status_text: "",
	player_hp: 0,
	player_atk: 0,
	player_atk_plus: 0,
	player_def_plus: 0,
	player_shield: 0,
	player_status_text: "",
	turn_count: 1,
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
	display_update();
}

function clear_output_text() {
	global_output_text = "";
};

function output_text(newest_text_output) {
	global_output_text += "- " + newest_text_output + "<br>";
};

function output_text_silent(newest_text_output) {
	global_output_text += newest_text_output + "<br>";
};

function clear_enemy_status_text() {
	battle.enemy_status_text = "";
}

function enemy_status_text(newest_status) {
	if (battle.enemy_status_text.length > 0) {
		battle.enemy_status_text += "  ";
	}
	battle.enemy_status_text += newest_status;
}

function clear_player_status_text() {
	battle.player_status_text = "";
}

function player_status_text(newest_status) {
	if (battle.player_status_text.length > 0) {
		battle.player_status_text += "  ";
	}
	battle.player_status_text += newest_status;
}

function display_update() {
	document.getElementById("text_stats_name").innerHTML = player.name_long;
	
	document.getElementById("text_enemy_name").innerHTML = battle.enemy.name_long;
	document.getElementById("text_player_name").innerHTML = player.name_long;
	document.getElementById("div_enemy_hp_bar").style.width = (100 * battle.enemy_hp / battle.enemy.hp) + "%";
	document.getElementById("div_player_hp_bar").style.width = (100 * battle.player_hp / player.hp) + "%";
	
	document.getElementById("text_output").innerHTML = global_output_text;
	
	if (window.matchMedia("(max-width:30rem)").matches) {
		document.getElementById("text_enemy_atk").innerHTML = "";
		document.getElementById("text_player_atk").innerHTML = "";
		document.getElementById("text_enemy_atk").classList.add("marginless");
		document.getElementById("text_player_atk").classList.add("marginless");
		document.getElementById("text_enemy_hp").innerHTML = "<b>HP:&nbsp;" + battle.enemy_hp + "/" + battle.enemy.hp + "  ATK:&nbsp;" + battle.enemy.atk + "  " + battle.enemy_status_text + "</b>";
		document.getElementById("text_player_hp").innerHTML = "<b>HP:&nbsp;" + battle.player_hp + "/" + player.hp + "  ATK:&nbsp;" + battle.player_atk + "  " + battle.player_status_text + "</b>";
		document.getElementById("text_enemy_status").innerHTML = "";
		document.getElementById("text_player_status").innerHTML = "";
		document.getElementById("text_enemy_status").classList.add("marginless");
		document.getElementById("text_player_status").classList.add("marginless");
	} else {
		document.getElementById("text_enemy_atk").innerHTML = "<b>ATK: " + battle.enemy.atk + "</b>";
		document.getElementById("text_player_atk").innerHTML = "<b>ATK: " + battle.player_atk + "</b>";
		document.getElementById("text_enemy_atk").classList.remove("marginless");
		document.getElementById("text_player_atk").classList.remove("marginless");
		document.getElementById("text_enemy_hp").innerHTML = "<b>HP: " + battle.enemy_hp + "/" + battle.enemy.hp + "</b>";
		document.getElementById("text_player_hp").innerHTML = "<b>HP: " + battle.player_hp + "/" + player.hp + "</b>";
		document.getElementById("text_enemy_status").innerHTML = "<b>" + battle.enemy_status_text + "</b>";
		document.getElementById("text_player_status").innerHTML = "<b>" + battle.player_status_text + "</b>";
		document.getElementById("text_enemy_status").classList.remove("marginless");
		document.getElementById("text_player_status").classList.remove("marginless");
	}
	
	
	document.getElementById("btn_battle_inv_acorn").innerHTML = "ACORN<br>+25% HP<br>x" + player.inv[items.acorn];
	document.getElementById("btn_battle_inv_acorn").disabled = player.inv[items.acorn] <= 0;
	document.getElementById("btn_battle_inv_fruit").innerHTML = "FRUIT<br>+50% HP<br>x" + player.inv[items.fruit];
	document.getElementById("btn_battle_inv_fruit").disabled = player.inv[items.fruit] <= 0;
	document.getElementById("btn_battle_inv_pizza").innerHTML = "PIZZA<br>FULL HP<br>x" + player.inv[items.pizza];
	document.getElementById("btn_battle_inv_pizza").disabled = player.inv[items.pizza] <= 0;
	document.getElementById("btn_battle_inv_atk").innerHTML = "ATK+<br>+50% 5T<br>x" + player.inv[items.atk];
	document.getElementById("btn_battle_inv_atk").disabled = player.inv[items.atk] <= 0;
	document.getElementById("btn_battle_inv_def").innerHTML = "DEF+<br>+33% 5T<br>x" + player.inv[items.def];
	document.getElementById("btn_battle_inv_def").disabled = player.inv[items.def] <= 0;
	document.getElementById("btn_battle_inv_shield").innerHTML = "SHIELD<br>INVN 3T<br>x" + player.inv[items.shield];
	document.getElementById("btn_battle_inv_shield").disabled = player.inv[items.shield] <= 0;
}

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
	battle.player_hp = player.hp;
	battle.player_atk = player.atk;
	battle.player_atk_plus = 0;
	battle.player_def_plus = 0;
	battle.player_shield = 0;
	clear_player_status_text();
	battle.enemy_hp = battle.enemy.hp;
	battle.enemy_charging = false;
	clear_enemy_status_text();
	battle.turn_count = 1;
	change_state(states.battle);
	clear_output_text();
	output_text(player.name_short + " ENCOUNTERED " + battle.enemy.name_long);
	display_update();
}

function turn_hander(player_action, used_item = items.acorn) {
	change_state(states.battle);
	clear_output_text();
	let enemy_damaged = battle.player_atk;
	let player_healed = 0;
	let player_blocking = false;
	let player_crit = false;
	let player_damaged = battle.enemy.atk;
	let enemy_charged = false;
	
	if (battle.enemy_charging) {
		enemy_charged = true;
		battle.enemy_charging = false;
	}
	
	if (player_action == actions.attack) {
		output_text(player.name_short + " ATTACKED " + battle.enemy.name_long);
		if (randbool(player.crit / 100)) {
			player_crit = true;
			enemy_damaged *= 3;
			output_text("<b" + colors.crit + ">CRIT!</b>");
		}
		enemy_damaged = Math.round(enemy_damaged);
		battle.enemy_hp -= enemy_damaged;
		output_text(battle.enemy.name_long + " LOST <b><span" + (player_crit ? colors.crit : "") + ">" + enemy_damaged + "</span> HP</b>");
	} else if (player_action == actions.block) {
		player_blocking = true;
		output_text(player.name_short + " BLOCKED");
	} else if (player_action == actions.item) {
		player.inv[used_item] -= 1;
		output_text(player.name_short + " USED " + item_names[used_item]);
		if (used_item == items.acorn) {
			player_healed =  player.hp / 4;
		} else if (used_item == items.fruit) {
			player_healed =  player.hp / 2;
		} else if (used_item == items.pizza) {
			player_healed =  player.hp;
		} else if (used_item == items.atk) {
			battle.player_atk_plus = 6;
			battle.player_atk = Math.round(player.atk * 1.5);
		} else if (used_item == items.def) {
			battle.player_def_plus = 6;
		} else if (used_item == items.shield) {
			battle.player_shield = 3;
		}
		if (player_healed > 0) {
			player_healed = Math.round(player_healed);
			battle.player_hp += player_healed;
			if (battle.player_hp > player.hp) {
				battle.player_hp = player.hp;
			}
			output_text(player.name_short + " GAINED <b><span" + colors.heal + ">" + player_healed + "</span> HP</b>");
		}
	}
	output_text_silent("");
	
	if (battle.enemy_hp <= 0) {
		battle.enemy_hp = 0;
		change_state(states.battle_win);
		output_text("<b>YOU WIN!</b>");
		player.coins += battle.enemy.reward;
		output_text("PRIZE: <b>" + battle.enemy.reward + "</b> COINS");
	} else {
		/*if (battle.enemy.special == specials.chica && battle.turn_count % 3 == 0) {
			//boss actions
		} else {*/
			if (!enemy_charged && randbool(battle.enemy.crit / 100)) {
				battle.enemy_charging = true;
  				output_text(battle.enemy.name_long + " IS <b" + colors.crit + ">CHARGING</b>");
			} else {
				output_text(battle.enemy.name_long + " ATTACKED " + player.name_short);
				if (randbool(battle.enemy.miss / 100)) {
					output_text("<b" + colors.miss + ">MISS!</b>");
				} else if (battle.player_shield > 0) {
					output_text("<b" + colors.heal + ">SHIELD!</b>");
				} else {
					if (player_blocking) {
						player_damaged /= 2;
						output_text("<b>BLOCK!</b>");
					}
					if (battle.player_def_plus > 0) {
						player_damaged = player_damaged * 2 / 3;
					}
					if (enemy_charged) {
						player_damaged *= 3;
						output_text("<b" + colors.crit + ">CRIT!</b>");
					}
					player_damaged = Math.round(player_damaged);
					battle.player_hp -= player_damaged;
					output_text(player.name_short + " LOST <b></span" + (enemy_charged ? colors.crit : "") + ">" + player_damaged + "</span> HP</b>");
				}
				battle.enemy_charging = false;
			}
		//}
		if (battle.player_hp <= 0) {
			battle.player_hp = 0;
			change_state(states.battle_lose);
			output_text_silent("");
			output_text("<b>YOU LOSE...</b>");
		}
	}
	
	if (battle.player_atk_plus > 0) {
		battle.player_atk_plus--;
	}
	if (battle.player_def_plus > 0) {
		battle.player_def_plus--;
	}
	if (battle.player_shield > 0) {
		battle.player_shield--;
	}

	output_text_silent("");
	clear_enemy_status_text();
	clear_player_status_text();
	if (battle.enemy_charging) {
		enemy_status_text("<span" + colors.crit + ">CHARGING</span>");
	}
	if (battle.player_atk_plus > 0) {
		output_text_silent("<b>ATK+</b>: <b>" + battle.player_atk_plus + "</b> TURNS LEFT")
		if (battle.player_atk_plus == 1) {
			player_status_text("<span" + colors.faded + ">ATK+</span>");
		} else {
			player_status_text("ATK+");
		}
	} else {
		battle.player_atk = player.atk;
	}
	if (battle.player_def_plus > 0) {
		output_text_silent("<b>DEF+</b>: <b>" + battle.player_def_plus + "</b> TURNS LEFT")
		if (battle.player_def_plus == 1) {
			player_status_text("<span" + colors.faded + ">DEF+</span>");
		} else {
			player_status_text("DEF+");
		}
	}
	if (battle.player_shield > 0) {
		output_text_silent("<b>SHIELD</b>: <b>" + battle.player_shield + "</b> TURNS LEFT")
		player_status_text("<span" + (battle.player_shield == 1 ? colors.heal_faded : colors.heal) + ">SHIELD</span>");
	}
	battle.turn_count++;
	output_text_silent("CURRENT TURN: <b>" + battle.turn_count + "</b>");
	display_update();
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

function btn_stat_edit(modified_stat, stat_action, modified_item = items.acorn) {
}

function btn_dev_load_battle() {
	generate_enemy(player.location);
	battle_reset();
}

function btn_dev_min_stats() {
	player.hp = 30;
	player.atk = 4;
	player.inv = [0, 0, 0, 0, 0, 0,];
}

function btn_dev_max_stats() {
	player.hp = 300;
	player.atk = 30;
	player.inv = [99, 99, 99, 99, 99, 99,];
}