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

const item_list = [
	items.acorn,
	items.fruit,
	items.pizza,
	items.atk,
	items.def,
	items.shield,
];

const item_names = {
		0: {
			name: "acorn",
			name_long: "ACORN",
		},
		1: {
			name: "fruit",
			name_long: "FRUIT",
		},
		2: {
			name: "pizza",
			name_long: "PIZZA",
		},
		3: {
			name: "atk",
			name_long: "ATK+",
		},
		4: {
			name: "def",
			name_long: "DEF+",
		},
		5: {
			name: "shield",
			name_long: "SHIELD",
		},
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
	plus: " style='color:crimson;'",
};

const div_list = [
	"div_menu",
	"div_stats",
	"div_forest_main",
	"div_forest_north_4",
	"div_forest_north_5",
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
	},
	stats: {
		bg_color: "black",
		div_stats: true,
	},
	forest: {
		bg_color: "!AREA",
		div_forest_main: true,
	},
	forest_north: {
		bg_color: "!AREA",
		div_forest_main: true,
		div_forest_north_4: true,
		div_forest_north_5: true,
	},
	battle: {
		bg_color: "!AREA",
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_buttons: true,
		div_battle_textbox: true,
	},
	battle_inv: {
		bg_color: "!AREA",
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_inv: true,
		div_battle_textbox: true,
	},
	battle_win: {
		bg_color: "!AREA",
		div_battle_win: true,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_textbox: true,
	},
	battle_lose: {
		bg_color: "!AREA",
		div_battle_lose: true,
		div_battle_enemy: true,
		div_battle_player: true,
		div_battle_textbox: true,
	},
};

const enemies = {
	c_deer: {
		name: "CORRUPT DEER",
		name_long: "<b>CORRUPT DEER</b>",
		location: "WEST FOREST",
		hp: 20,
		atk: 2,
		crit: 0,
		miss: 20,
		spawn: 50,
		reward: 5,
		weight: 60,
		special: specials.none,
	},
	c_hawk: {
		name: "CORRUPT HAWK",
		name_long: "<b>CORRUPT HAWK</b>",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 33,
		reward: 10,
		weight: 40,
		special: specials.none,
	},
	c_hedgehog: {
		name: "CORRUPT HEDGEHOG",
		name_long: "<b>CORRUPT HEDGEHOG</b>",
		location: "WEST FOREST",
		hp: 50,
		atk: 3,
		crit: 10,
		miss: 15,
		spawn: 17,
		reward: 20,
		weight: 19,
		special: specials.none,
	},
	g_hawk: {
		name: "GILDED HAWK",
		name_long: "<b" + colors.gilded + ">GILDED HAWK</b>",
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
	c_boar: {
		name: "CORRUPT BOAR",
		name_long: "<b>CORRUPT BOAR</b>",
		location: "SOUTH FOREST",
		hp: 40,
		atk: 4,
		crit: 5,
		miss: 20,
		spawn: 50,
		reward: 10,
		weight: 60,
		special: specials.none,
	},
	c_cat: {
		name: "CORRUPT CAT",
		name_long: "<b>CORRUPT CAT</b>",
		location: "SOUTH FOREST",
		hp: 60,
		atk: 6,
		crit: 15,
		miss: 0,
		spawn: 33,
		reward: 15,
		weight: 40,
		special: specials.none,
	},
	c_woodpecker: {
		name: "CORRUPT WOODPECKER",
		name_long: "<b>CORRUPT WOODPECKER</b>",
		location: "SOUTH FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 20,
		spawn: 17,
		reward: 25,
		weight: 19,
		special: specials.none,
	},
	g_cat: {
		name: "GILDED CAT",
		name_long: "<b" + colors.gilded + ">GILDED CAT</b>",
		location: "SOUTH FOREST",
		hp: 60,
		atk: 6,
		crit: 15,
		miss: 0,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded,
	},
	c_owl: {
		name: "CORRUPT OWL",
		name_long: "<b>CORRUPT OWL</b>",
		location: "EAST FOREST",
		hp: 60,
		atk: 6,
		crit: 10,
		miss: 15,
		spawn: 50,
		reward: 15,
		weight: 60,
		special: specials.none,
	},
	c_beaver: {
		name: "CORRUPT BEAVER",
		name_long: "<b>CORRUPT BEAVER</b>",
		location: "EAST FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 40,
		special: specials.none,
	},
	c_wolf: {
		name: "CORRUPT WOLF",
		name_long: "<b>CORRUPT WOLF</b>",
		location: "EAST FOREST",
		hp: 120,
		atk: 12,
		crit: 40,
		miss: 20,
		spawn: 17,
		reward: 30,
		weight: 19,
		special: specials.none,
	},
	g_beaver: {
		name: "GILDED BEAVER",
		name_long: "<b" + colors.gilded + ">GILDED BEAVER</b>",
		location: "EAST FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded,
	},
	d_deer: {
		name: "DEAD DEER",
		name_long: "<b>DEAD DEER</b>",
		location: "NORTH FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 33,
		special: specials.none,
	},
	d_boar: {
		name: "DEAD BOAR",
		name_long: "<b>DEAD BOAR</b>",
		location: "NORTH FOREST",
		hp: 120,
		atk: 12,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 32,
		special: specials.none,
	},
	d_owl: {
		name: "DEAD OWL",
		name_long: "<b>DEAD OWL</b>",
		location: "NORTH FOREST",
		hp: 180,
		atk: 18,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 32,
		special: specials.none,
	},
	gd_deer: {
		name: "GILDED DEAD DEER",
		name_long: "<b" + colors.gilded + ">GILDED DEAD DEER</b>",
		location: "NORTH FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded,
	},
	gd_boar: {
		name: "GILDED DEAD BOAR",
		name_long: "<b" + colors.gilded + ">GILDED DEAD BOAR</b>",
		location: "NORTH FOREST",
		hp: 120,
		atk: 12,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded,
	},
	gd_owl: {
		name: "GILDED DEAD OWL",
		name_long: "<b" + colors.gilded + ">GILDED DEAD OWL</b>",
		location: "NORTH FOREST",
		hp: 180,
		atk: 18,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: specials.gilded,
	},
	cp_deer: {
		name: "CORRUPT DEER+",
		name_long: "<b>CORRUPT DEER<span" + colors.plus + ">+</span></b>",
		location: "WEST FOREST",
		hp: 120,
		atk: 12,
		crit: 0,
		miss: 20,
		spawn: 50,
		reward: 10,
		weight: 60,
		special: specials.none,
	},
	cp_hawk: {
		name: "CORRUPT HAWK+",
		name_long: "<b>CORRUPT HAWK<span" + colors.plus + ">+</span></b>",
		location: "WEST FOREST",
		hp: 180,
		atk: 24,
		crit: 20,
		miss: 40,
		spawn: 33,
		reward: 15,
		weight: 40,
		special: specials.none,
	},
	cp_hedgehog: {
		name: "CORRUPT HEDGEHOG+",
		name_long: "<b>CORRUPT HEDGEHOG<span" + colors.plus + ">+</span></b>",
		location: "WEST FOREST",
		hp: 240,
		atk: 18,
		crit: 10,
		miss: 15,
		spawn: 17,
		reward: 25,
		weight: 19,
		special: specials.none,
	},
	cp_boar: {
		name: "CORRUPT BOAR+",
		name_long: "<b>CORRUPT BOAR<span" + colors.plus + ">+</span></b>",
		location: "SOUTH FOREST",
		hp: 180,
		atk: 18,
		crit: 5,
		miss: 20,
		spawn: 50,
		reward: 15,
		weight: 60,
		special: specials.none,
	},
	cp_cat: {
		name: "CORRUPT CAT+",
		name_long: "<b>CORRUPT CAT<span" + colors.plus + ">+</span></b>",
		location: "SOUTH FOREST",
		hp: 240,
		atk: 24,
		crit: 15,
		miss: 0,
		spawn: 33,
		reward: 20,
		weight: 40,
		special: specials.none,
	},
	cp_woodpecker: {
		name: "CORRUPT WOODPECKER+",
		name_long: "<b>CORRUPT WOODPECKER<span" + colors.plus + ">+</span></b>",
		location: "SOUTH FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 20,
		spawn: 17,
		reward: 30,
		weight: 19,
		special: specials.none,
	},
	cp_owl: {
		name: "CORRUPT OWL+",
		name_long: "<b>CORRUPT OWL<span" + colors.plus + ">+</span></b>",
		location: "EAST FOREST",
		hp: 240,
		atk: 24,
		crit: 10,
		miss: 15,
		spawn: 50,
		reward: 20,
		weight: 60,
		special: specials.none,
	},
	cp_beaver: {
		name: "CORRUPT BEAVER+",
		name_long: "<b>CORRUPT BEAVER<span" + colors.plus + ">+</span></b>",
		location: "EAST FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 40,
		special: specials.none,
	},
	cp_wolf: {
		name: "CORRUPT WOLF+",
		name_long: "<b>CORRUPT WOLF<span" + colors.plus + ">+</span></b>",
		location: "EAST FOREST",
		hp: 360,
		atk: 36,
		crit: 40,
		miss: 20,
		spawn: 17,
		reward: 35,
		weight: 19,
		special: specials.none,
	},
	dp_deer: {
		name: "DEAD DEER+",
		name_long: "<b>DEAD DEER<span" + colors.plus + ">+</span></b>",
		location: "NORTH FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 33,
		special: specials.none,
	},
	dp_boar: {
		name: "DEAD BOAR+",
		name_long: "<b>DEAD BOAR<span" + colors.plus + ">+</span></b>",
		location: "NORTH FOREST",
		hp: 330,
		atk: 33,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 32,
		special: specials.none,
	},
	dp_owl: {
		name: "DEAD OWL+",
		name_long: "<b>DEAD OWL<span" + colors.plus + ">+</span></b>",
		location: "NORTH FOREST",
		hp: 360,
		atk: 36,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,   
		weight: 32,
		special: specials.none,
	},
};

const locations = {
	wf: {
		name: "WEST FOREST",
		color: "saddlebrown",
		enemies: [
			"c_deer",
			"c_hawk",
			"c_hedgehog",
			"g_hawk",
		],
	},
	sf: {
		name: "SOUTH FOREST",
		color: "forestgreen",
		enemies: [
			"c_boar",
			"c_cat",
			"c_woodpecker",
			"g_cat",
		],
	},
	ef: {
		name: "EAST FOREST",
		color: "whitesmoke",
		enemies: [
			"c_owl",
			"c_beaver",
			"c_wolf",
			"g_beaver",
		],
	},
	nf: {
		name: "NORTH FOREST",
		color: "black",
		enemies: [
			"d_deer",
			"gd_deer",
			"d_boar",
			"gd_boar",
			"d_owl",
			"gd_owl",
		],
	},
	wfp: {
		name: "WEST FOREST<span" + colors.plus + ">+</span>",
		color: "saddlebrown",
		enemies: [
			"cp_deer",
			"cp_hawk",
			"cp_hedgehog",
			"g_hawk",
		],
	},
	sfp: {
		name: "SOUTH FOREST<span" + colors.plus + ">+</span>",
		color: "forestgreen",
		enemies: [
			"cp_boar",
			"cp_cat",
			"cp_woodpecker",
			"g_cat",
		],
	},
	efp: {
		name: "EAST FOREST<span" + colors.plus + ">+</span>",
		color: "whitesmoke",
		enemies: [
			"cp_owl",
			"cp_beaver",
			"cp_wolf",
			"g_beaver",
		],
	},
	nfp: {
		name: "NORTH FOREST<span" + colors.plus + ">+</span>",
		color: "black",
		enemies: [
			"dp_deer",
			"gd_deer",
			"dp_boar",
			"gd_boar",
			"dp_owl",
			"gd_owl",
		],
	},
};

const location_id = {
	wf: "wf",
	sf: "sf",
	ef: "ef",
	nf: "nf",
	wfp: "wfp",
	sfp: "sfp",
	efp: "efp",
	nfp: "nfp",
};

let player = {
	name: "POPGOES THE WEASEL",
	name_long: "<b>POPGOES THE WEASEL</b>",
	name_short: "<b>POPGOES</b>",
	hp: 30,
	atk: 4,
	coins: 0,
	inv: [0, 0, 0, 0, 0, 0,],
	location: "wf",
	crit: 10,
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
	player_items_used: [0, 0, 0, 0, 0, 0,],
	player_status_text: "",
	turn_count: 1,
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
	display_update();
}

function select_forest(forest_id) {
	player.location = forest_id;
	//change buttons
	if (forest_id == location_id.nf || forest_id == location_id.nfp) {
		change_state(states.forest_north);
	} else {
		change_state(states.forest);
	}
}


function stat_edit(modified_stat, stat_action, modified_item = items.acorn) {
	switch (modified_stat) {
		case stat_id.hp:
			switch (stat_action) {
				case stat_actions.min:
					player.hp = 30;
				break;
				case stat_actions.minus:
					player.hp -= 10;
				break;
				case stat_actions.plus:
					player.hp += 10;
				break;
				case stat_actions.max:
					player.hp = 300;
				break;
			}
		break;
		case stat_id.atk:
			switch (stat_action) {
				case stat_actions.min:
					player.atk = 4;
				break;
				case stat_actions.minus:
					player.atk--;
				break;
				case stat_actions.plus:
					player.atk++;
				break;
				case stat_actions.max:
					player.atk = 30;
				break;
			}
		break;
		case stat_id.item:
			switch (stat_action) {
				case stat_actions.min:
					player.inv[modified_item] = 0;
				break;
				case stat_actions.minus:
					player.inv[modified_item]--;
				break;
				case stat_actions.plus:
					player.inv[modified_item]++;
				break;
				case stat_actions.max:
					player.inv[modified_item] = 99;
				break;
			}
		break;
	}
	display_update();
}

function min_stats() {
	stat_edit(stat_id.hp, stat_actions.min);
	stat_edit(stat_id.atk, stat_actions.min);
	item_list.forEach((i) => stat_edit(stat_id.item, stat_actions.min, i));
}

function max_stats() {
	stat_edit(stat_id.hp, stat_actions.max);
	stat_edit(stat_id.atk, stat_actions.max);
	item_list.forEach((i) => stat_edit(stat_id.item, stat_actions.max, i));
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
	document.getElementById("text_stats_coins").innerHTML = "COINS: <b>" + player.coins + "</b>";
	document.getElementById("text_stats_hp").innerHTML = "HP: <b>" + player.hp + "</b>";
	document.getElementById("btn_stats_hp_min").disabled = player.hp <= 30;
	document.getElementById("btn_stats_hp_minus").disabled = player.hp <= 30;
	document.getElementById("btn_stats_hp_plus").disabled = player.hp >= 300;
	document.getElementById("btn_stats_hp_max").disabled = player.hp >= 300;
	document.getElementById("text_stats_atk").innerHTML = "ATK: <b>" + player.atk + "</b>";
	document.getElementById("btn_stats_atk_min").disabled = player.atk <= 4;
	document.getElementById("btn_stats_atk_minus").disabled = player.atk <= 4;
	document.getElementById("btn_stats_atk_plus").disabled = player.atk >= 30;
	document.getElementById("btn_stats_atk_max").disabled = player.atk >= 30;
	item_list.forEach((i) => {
		document.getElementById("text_stats_inv_" + item_names[i].name).innerHTML = item_names[i].name_long + ": <b>" + player.inv[i] + "</b>";
		document.getElementById("btn_stats_inv_" + item_names[i].name + "_min").disabled = player.inv[i] <= 0;
		document.getElementById("btn_stats_inv_" + item_names[i].name + "_minus").disabled = player.inv[i] <= 0;
		document.getElementById("btn_stats_inv_" + item_names[i].name + "_plus").disabled = player.inv[i] >= 99;
		document.getElementById("btn_stats_inv_" + item_names[i].name + "_max").disabled = player.inv[i] >= 99;
	});
	
	for (let i = 0; i < 6 && i < locations[player.location].enemies.length; i++) {
		document.getElementById("btn_enemy_" + i).innerHTML = enemies[locations[player.location].enemies[i]].name_long;
	}
	
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

function start_battle(enemy_index) {
	battle.enemy = enemies[locations[player.location].enemies[enemy_index]];
	battle_reset();
}

function battle_reset() {
	battle.player_hp = player.hp;
	battle.player_atk = player.atk;
	battle.player_atk_plus = 0;
	battle.player_def_plus = 0;
	battle.player_shield = 0;
	item_list.forEach((i) => battle.player_items_used[i] = 0);
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
	battle_reset();
}

function turn_hander(player_action, used_item = items.acorn) {
	change_state(states.battle);
	clear_output_text();
	let enemy_damaged = battle.player_atk;
	let player_healed = player.hp;
	let player_blocking = false;
	let player_crit = false;
	let player_damaged = battle.enemy.atk;
	let enemy_charged = false;
	
	if (battle.enemy_charging) {
		enemy_charged = true;
		battle.enemy_charging = false;
	}
	
	switch (player_action) {
		case actions.attack:
			output_text(player.name_short + " ATTACKED " + battle.enemy.name_long);
			if (randbool(player.crit / 100)) {
				player_crit = true;
				enemy_damaged *= 3;
				output_text("<b" + colors.crit + ">CRIT!</b>");
			}
			enemy_damaged = Math.round(enemy_damaged);
			battle.enemy_hp -= enemy_damaged;
			output_text(battle.enemy.name_long + " LOST <b><span" + (player_crit ? colors.crit : "") + ">" + enemy_damaged + "</span> HP</b>");
		break;
		case actions.block:
			player_blocking = true;
			output_text(player.name_short + " BLOCKED");
		break;
		case actions.item:
			player.inv[used_item]--;
			battle.player_items_used[used_item]++;
			output_text(player.name_short + " USED <b>" + item_names[used_item].name_long + "</b>");
			switch (used_item) {
				case items.acorn:
					player_healed /= 2;
				case items.fruit:
					player_healed /=2;
				case items.pizza:
					player_healed = Math.round(player_healed);
					battle.player_hp += player_healed;
					if (battle.player_hp > player.hp) {
						battle.player_hp = player.hp;
					}
					output_text(player.name_short + " GAINED <b><span" + colors.heal + ">" + player_healed + "</span> HP</b>");
				break;
				case items.atk:
					battle.player_atk_plus = 6;
					battle.player_atk = Math.round(player.atk * 1.5);
				break;
				case items.def:
					battle.player_def_plus = 6;
				break;
				case items.shield:
					battle.player_shield = 3;
				break;
			}
		break;
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
			item_list.forEach((i) => player.inv[i] += battle.player_items_used[i]);
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
		if (battle.player_atk_plus == 1) {
			output_text_silent("<b>ATK+</b>: <b>1</b> TURN LEFT")
			player_status_text("<span" + colors.faded + ">ATK+</span>");
		} else {
			output_text_silent("<b>ATK+</b>: <b>" + battle.player_atk_plus + "</b> TURNS LEFT")
			player_status_text("ATK+");
		}
	} else {
		battle.player_atk = player.atk;
	}
	if (battle.player_def_plus > 0) {
		if (battle.player_def_plus == 1) {
			output_text_silent("<b>DEF+</b>: <b>1</b> TURN LEFT")
			player_status_text("<span" + colors.faded + ">DEF+</span>");
		} else {
			output_text_silent("<b>DEF+</b>: <b>" + battle.player_def_plus + "</b> TURNS LEFT")
			player_status_text("DEF+");
		}
	}
	if (battle.player_shield > 0) {
		if (battle.player_shield == 1) {
			output_text_silent("<b>SHIELD</b>: <b>1</b> TURN LEFT")
			player_status_text("<span" + colors.heal_faded + ">SHIELD</span>");
		} else {
			output_text_silent("<b>SHIELD</b>: <b>" + battle.player_shield + "</b> TURNS LEFT")
			player_status_text("<span" + colors.heal + ">SHIELD</span>");
		}
	}
	battle.turn_count++;
	output_text_silent("CURRENT TURN: <b>" + battle.turn_count + "</b>");
	display_update();
}

function battle_info() {
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