//by The Crow's Den

function nancatch(input_calc) {
	return input_calc ? input_calc : 0;
}

function randbool(random_odds) {
	return Math.random() < random_odds;
}

function shallow_copy(input_object) {
	return JSON.parse(JSON.stringify(input_object));
}

const stat_actions = {
	min: 0,
	minus: 1,
	plus: 2,
	max: 3,
	off: 4,
	on: 5,
	random: 6,
	never: 7,
	always: 8,
	purple: 9,
	yellow: 10,
};

const stat_types = {
	item: 0,
	range: 1,
	bool: 2,
	cheat: 3,
	laser: 4,
}

const cheat_states = {
	random: 0,
	never: 1,
	always: 2,
}

const laser_states = {
	none: 0,
	random: 1,
	purple: 2,
	yellow: 3,
}

const stat_id = {
	item: 0,
	hp: 1,
	atk: 2,
	jump: 3,
	hook: 4,
	dig: 5,
	qp: 6,
	spiky: 7,
	cheat_menu: 8,
	cheat_player_crit: 9,
	cheat_enemy_crit: 10,
	cheat_enemy_miss: 11,
	laser: 12,
}

const stat_list = {
	range: [
		stat_id.hp,
		stat_id.atk,
	],
	bool: [
		stat_id.jump,
		stat_id.hook,
		stat_id.dig,
		stat_id.qp,
		stat_id.spiky,
		stat_id.cheat_menu,
	],
	cheat: [
		stat_id.cheat_player_crit,
		stat_id.cheat_enemy_crit,
		stat_id.cheat_enemy_miss,
	],
}

const stat_info = {
	0: {
		name: "error: stat_info[stat_id.item].name",
		name_long: "error: stat_info[stat_id.item].name_long",
		type: stat_types.item,
	},
	1: {
		name: "hp",
		name_long: "HP",
		type: stat_types.range,
		min: 30,
		max: 300,
		step: 10,
	},
	2: {
		name: "atk",
		name_long: "ATK",
		type: stat_types.range,
		min: 4,
		max: 30,
		step: 1,
	},
	3: {
		name: "jump",
		name_long: "JUMP",
		type: stat_types.bool,
	},
	4: {
		name: "hook",
		name_long: "HOOK",
		type: stat_types.bool,
	},
	5: {
		name: "dig",
		name_long: "DIG",
		type: stat_types.bool,
	},
	6: {
		name: "qp",
		name_long: "QUICK POCKET",
		type: stat_types.bool,
	},
	7: {
		name: "spiky",
		name_long: "SPIKY SHIELD",
		type: stat_types.bool,
	},
	8: {
		name: "cheat_menu",
		name_long: "CHEAT MENU",
		type: stat_types.bool,
	},
	9: {
		name: "cheat_player_crit",
		name_long: "PLAYER CRIT",
		type: stat_types.cheat,
	},
	10: {
		name: "cheat_enemy_crit",
		name_long: "ENEMY CRIT",
		type: stat_types.cheat,
	},
	11: {
		name: "cheat_enemy_miss",
		name_long: "ENEMY MISS",
		type: stat_types.cheat,
	},
	12: {
		name: "error: stat_info[stat_id.laser].name",
		name_long: "error: stat_info[stat_id.laser].name_long",
		type: stat_types.laser,
	},
};

const actions = {
	attack: 0,
	block: 1,
	item: 2,
	jump: 3,
	hook: 4,
	dig: 5,
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

const item_info = {
		0: {
			name: "acorn",
			name_long: "ACORN",
			weight: 25,
		},
		1: {
			name: "fruit",
			name_long: "FRUIT",
			weight: 20,
		},
		2: {
			name: "pizza",
			name_long: "PIZZA",
			weight: 15,
		},
		3: {
			name: "atk",
			name_long: "ATK+",
			weight: 15,
		},
		4: {
			name: "def",
			name_long: "DEF+",
			weight: 15,
		},
		5: {
			name: "shield",
			name_long: "SHIELD",
			weight: 10,
		},
}

const colors = {
	normal: "white",
	faded: "darkgray",
	heal: "chartreuse",
	crit: "darkorange",
	miss: "orchid",
	jump: "yellow",
	hook: "red",
	dig: "dodgerblue",
	shield: "chartreuse",
	shield_faded: "limegreen",
	bonus: "yellow",
	reflect: "blueviolet",
	gilded: "goldenrod",
	plus: "crimson",
	bonus_zone: "violet",
};

function color(input_string, input_color = colors.normal) {
	return "<span style='color: " + input_color + ";'>" + input_string + "</span>";
}

const div_list = [
	"div_menu",
	"div_stats",
	"div_forest",
	"div_forest_4",
	"div_forest_5",
	"div_battle",
	"div_battle_win",
	"div_battle_lose",
	"div_battle_buttons",
	"div_battle_button_info",
	"div_battle_inv",
	"div_cheats",
];

const states = {
	menu: {
		div_menu: true,
	},
	stats: {
		div_stats: true,
		div_cheats: true,
	},
	forest: {
		bg_color_area: true,
		div_forest: true,
	},
	forest_north: {
		bg_color_area: true,
		div_forest: true,
		div_forest_4: true,
		div_forest_5: true,
	},
	battle: {
		bg_color_area: true,
		div_battle: true,
		div_battle_buttons: true,
		div_battle_button_info: true,
		div_cheats: true,
	},
	battle_inv: {
		bg_color_area: true,
		div_battle: true,
		div_battle_button_info: true,
		div_battle_inv: true,
		div_cheats: true,
	},
	battle_win: {
		bg_color_area: true,
		div_battle: true,
		div_battle_win: true,
	},
	battle_lose: {
		bg_color_area: true,
		div_battle: true,
		div_battle_lose: true,
	},
};

const specials = {
	fake: 0,
	boss: 1,
	chica: 2,
	foxy: 3,
	bonnie: 4,
	bb: 5,
	dkf: 6,
};

const progress_markers = {
	tdf: 0,
	tdf_act_1: 1,
	tdf_act_2: 2,
	jumpless: 3,
	hookless: 4,
	digless: 5,
}

const enemies = {
	c_deer: {
		name: "CORRUPT DEER",
		name_long: "CORRUPT DEER",
		location: "WEST FOREST",
		hp: 20,
		atk: 2,
		crit: 0,
		miss: 20,
		spawn: 50,
		reward: 5,
		weight: 60,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_hawk: {
		name: "CORRUPT HAWK",
		name_long: "CORRUPT HAWK",
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 33,
		reward: 10,
		weight: 40,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_hedgehog: {
		name: "CORRUPT HEDGEHOG",
		name_long: "CORRUPT HEDGEHOG",
		location: "WEST FOREST",
		hp: 50,
		atk: 3,
		crit: 10,
		miss: 15,
		spawn: 17,
		reward: 20,
		weight: 19,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	g_hawk: {
		name: "GILDED HAWK",
		name_long: color("GILDED HAWK", colors.gilded),
		location: "WEST FOREST",
		hp: 30,
		atk: 5,
		crit: 20,
		miss: 40,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: [
		],
		progress: [
			progress_markers.tdf,
		],
	},
	c_chica: {
		name: "CORRUPT CHICA",
		name_long: "CORRUPT CHICA",
		location: "WEST FOREST",
		hp: 60,
		atk: 6,
		crit: 15,
		miss: 15,
		spawn: "BOSS",
		reward: 50,
		weight: 100,
		special: [
			specials.boss,
			specials.chica,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_boar: {
		name: "CORRUPT BOAR",
		name_long: "CORRUPT BOAR",
		location: "SOUTH FOREST",
		hp: 40,
		atk: 4,
		crit: 5,
		miss: 20,
		spawn: 50,
		reward: 10,
		weight: 60,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_cat: {
		name: "CORRUPT CAT",
		name_long: "CORRUPT CAT",
		location: "SOUTH FOREST",
		hp: 60,
		atk: 6,
		crit: 15,
		miss: 0,
		spawn: 33,
		reward: 15,
		weight: 40,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_woodpecker: {
		name: "CORRUPT WOODPECKER",
		name_long: "CORRUPT WOODPECKER",
		location: "SOUTH FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 20,
		spawn: 17,
		reward: 25,
		weight: 19,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	g_cat: {
		name: "GILDED CAT",
		name_long: color("GILDED CAT", colors.gilded),
		location: "SOUTH FOREST",
		hp: 60,
		atk: 6,
		crit: 15,
		miss: 0,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: [
		],
		progress: [
			progress_markers.tdf,
		],
	},
	c_foxy: {
		name: "CORRUPT FOXY",
		name_long: "CORRUPT FOXY",
		location: "SOUTH FOREST",
		hp: 120,
		atk: 12,
		crit: 15,
		miss: 15,
		spawn: "BOSS",
		reward: 50,
		weight: 100,
		special: [
			specials.boss,
			specials.foxy,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_owl: {
		name: "CORRUPT OWL",
		name_long: "CORRUPT OWL",
		location: "EAST FOREST",
		hp: 60,
		atk: 6,
		crit: 10,
		miss: 15,
		spawn: 50,
		reward: 15,
		weight: 60,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_beaver: {
		name: "CORRUPT BEAVER",
		name_long: "CORRUPT BEAVER",
		location: "EAST FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 40,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	c_wolf: {
		name: "CORRUPT WOLF",
		name_long: "CORRUPT WOLF",
		location: "EAST FOREST",
		hp: 120,
		atk: 12,
		crit: 40,
		miss: 20,
		spawn: 17,
		reward: 30,
		weight: 19,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	g_beaver: {
		name: "GILDED BEAVER",
		name_long: color("GILDED BEAVER", colors.gilded),
		location: "EAST FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: [
		],
		progress: [
			progress_markers.tdf,
		],
	},
	c_bonnie: {
		name: "CORRUPT BONNIE",
		name_long: "CORRUPT BONNIE",
		location: "EAST FOREST",
		hp: 180,
		atk: 18,
		crit: 15,
		miss: 15,
		spawn: "BOSS",
		reward: 50,
		weight: 100,
		special: [
			specials.boss,
			specials.bonnie,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	d_deer: {
		name: "DEAD DEER",
		name_long: "DEAD DEER",
		location: "NORTH FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 33,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	d_boar: {
		name: "DEAD BOAR",
		name_long: "DEAD BOAR",
		location: "NORTH FOREST",
		hp: 120,
		atk: 12,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 32,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	d_owl: {
		name: "DEAD OWL",
		name_long: "DEAD OWL",
		location: "NORTH FOREST",
		hp: 180,
		atk: 18,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 20,
		weight: 32,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	gd_deer: {
		name: "GILDED DEAD DEER",
		name_long: color("GILDED DEAD DEER", colors.gilded),
		location: "NORTH FOREST",
		hp: 80,
		atk: 8,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: [
		],
		progress: [
			progress_markers.tdf,
		],
	},
	gd_boar: {
		name: "GILDED DEAD BOAR",
		name_long: color("GILDED DEAD BOAR", colors.gilded),
		location: "NORTH FOREST",
		hp: 120,
		atk: 12,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: [
		],
		progress: [
			progress_markers.tdf,
		],
	},
	gd_owl: {
		name: "GILDED DEAD OWL",
		name_long: color("GILDED DEAD OWL", colors.gilded),
		location: "NORTH FOREST",
		hp: 180,
		atk: 18,
		crit: 20,
		miss: 10,
		spawn: 0.8,
		reward: 150,
		weight: 1,
		special: [
		],
		progress: [
			progress_markers.tdf,
		],
	},
	c_bb: {
		name: "CORRUPT BB",
		name_long: "CORRUPT BB",
		location: "NORTH FOREST",
		hp: 240,
		atk: 24,
		crit: 0,
		miss: 20,
		spawn: "BOSS",
		reward: 100,
		weight: 100,
		special: [
			specials.boss,
			specials.bb,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_1,
		],
	},
	cp_deer: {
		name: "CORRUPT DEER+",
		name_long: "CORRUPT DEER" + color("+", colors.plus),
		location: "WEST FOREST",
		hp: 120,
		atk: 12,
		crit: 0,
		miss: 20,
		spawn: 50,
		reward: 10,
		weight: 60,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	cp_hawk: {
		name: "CORRUPT HAWK+",
		name_long: "CORRUPT HAWK" + color("+", colors.plus),
		location: "WEST FOREST",
		hp: 180,
		atk: 24,
		crit: 20,
		miss: 40,
		spawn: 33,
		reward: 15,
		weight: 40,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	cp_hedgehog: {
		name: "CORRUPT HEDGEHOG+",
		name_long: "CORRUPT HEDGEHOG" + color("+", colors.plus),
		location: "WEST FOREST",
		hp: 240,
		atk: 18,
		crit: 10,
		miss: 15,
		spawn: 17,
		reward: 25,
		weight: 19,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	d_chica: {
		name: "DEAD CHICA",
		name_long: "DEAD CHICA",
		location: "WEST FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 10,
		spawn: "BOSS",
		reward: 100,
		weight: 100,
		special: [
			specials.boss,
			specials.chica,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
			progress_markers.jumpless,
		],
	},
	cp_boar: {
		name: "CORRUPT BOAR+",
		name_long: "CORRUPT BOAR" + color("+", colors.plus),
		location: "SOUTH FOREST",
		hp: 180,
		atk: 18,
		crit: 5,
		miss: 20,
		spawn: 50,
		reward: 15,
		weight: 60,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	cp_cat: {
		name: "CORRUPT CAT+",
		name_long: "CORRUPT CAT" + color("+", colors.plus),
		location: "SOUTH FOREST",
		hp: 240,
		atk: 24,
		crit: 15,
		miss: 0,
		spawn: 33,
		reward: 20,
		weight: 40,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	cp_woodpecker: {
		name: "CORRUPT WOODPECKER+",
		name_long: "CORRUPT WOODPECKER" + color("+", colors.plus),
		location: "SOUTH FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 20,
		spawn: 17,
		reward: 30,
		weight: 19,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	d_foxy: {
		name: "DEAD FOXY",
		name_long: "DEAD FOXY",
		location: "SOUTH FOREST",
		hp: 360,
		atk: 36,
		crit: 20,
		miss: 10,
		spawn: "BOSS",
		reward: 100,
		weight: 100,
		special: [
			specials.boss,
			specials.foxy,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
			progress_markers.hookless,
		],
	},
	cp_owl: {
		name: "CORRUPT OWL+",
		name_long: "CORRUPT OWL" + color("+", colors.plus),
		location: "EAST FOREST",
		hp: 240,
		atk: 24,
		crit: 10,
		miss: 15,
		spawn: 50,
		reward: 20,
		weight: 60,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	cp_beaver: {
		name: "CORRUPT BEAVER+",
		name_long: "CORRUPT BEAVER" + color("+", colors.plus),
		location: "EAST FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 40,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	cp_wolf: {
		name: "CORRUPT WOLF+",
		name_long: "CORRUPT WOLF" + color("+", colors.plus),
		location: "EAST FOREST",
		hp: 360,
		atk: 36,
		crit: 40,
		miss: 20,
		spawn: 17,
		reward: 35,
		weight: 19,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	d_bonnie: {
		name: "DEAD BONNIE",
		name_long: "DEAD BONNIE",
		location: "EAST FOREST",
		hp: 420,
		atk: 42,
		crit: 20,
		miss: 10,
		spawn: "BOSS",
		reward: 100,
		weight: 100,
		special: [
			specials.boss,
			specials.bonnie,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
			progress_markers.jumpless,
		],
	},
	dp_deer: {
		name: "DEAD DEER+",
		name_long: "DEAD DEER" + color("+", colors.plus),
		location: "NORTH FOREST",
		hp: 300,
		atk: 30,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 33,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	dp_boar: {
		name: "DEAD BOAR+",
		name_long: "DEAD BOAR" + color("+", colors.plus),
		location: "NORTH FOREST",
		hp: 330,
		atk: 33,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 32,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	dp_owl: {
		name: "DEAD OWL+",
		name_long: "DEAD OWL" + color("+", colors.plus),
		location: "NORTH FOREST",
		hp: 360,
		atk: 36,
		crit: 20,
		miss: 10,
		spawn: 33,
		reward: 25,
		weight: 32,
		special: [
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	dkf: {
		name: "DEAD KING FREDDY",
		name_long: "DEAD KING FREDDY",
		location: "THE CASTLE",
		hp: 1200,
		atk: 75,
		crit: 30,
		miss: 5,
		spawn: "BOSS",
		reward: 0,
		weight: 100,
		special: [
			specials.boss,
			specials.dkf,
		],
		progress: [
			progress_markers.tdf,
			progress_markers.tdf_act_2,
		],
	},
	fake_null: {
		name: "NULL",
		name_long: "NULL",
		location: color("BONUS", colors.bonus_zone),
		hp: 0,
		atk: 0,
		crit: 0,
		miss: 0,
		spawn: 0,
		reward: 0,
		weight: 0,
		special: [
			specials.fake,
		],
		progress: [
		],
	},
	fake_harry: {
		name: "HARRY",
		name_long: "HARRY",
		location: color("BONUS", colors.bonus_zone),
		hp: 4,
		atk: 1,
		crit: 0,
		miss: 30,
		spawn: 100,
		reward: 2,
		weight: 1,
		special: [
			specials.fake,
		],
		progress: [
		],
	},
	fake_sponge: {
		name: "SPONGE",
		name_long: "SPONGE",
		location: color("BONUS", colors.bonus_zone),
		hp: 1000000,
		atk: 0,
		crit: 0,
		miss: 100,
		spawn: 0,
		reward: 0,
		weight: 0,
		special: [
			specials.fake,
		],
		progress: [
		],
	},
	fake_god: {
		name: "GOD",
		name_long: "GOD",
		location: color("BONUS", colors.bonus_zone),
		hp: 49999,
		atk: 399,
		crit: 50,
		miss: 0,
		spawn: 0,
		reward: 0,
		weight: 0,
		special: [
			specials.fake,
			specials.boss,
			specials.dkf,
		],
		progress: [
		],
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
		boss: "c_chica",
		boss_color: "saddlebrown",
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
		boss: "c_foxy",
		boss_color: "forestgreen",
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
		boss: "c_bonnie",
		boss_color: "whitesmoke",
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
		boss: "c_bb",
		boss_color: "dodgerblue",
	},
	wfp: {
		name: "WEST FOREST" + color("+", colors.plus),
		color: "saddlebrown",
		enemies: [
			"cp_deer",
			"cp_hawk",
			"cp_hedgehog",
			"g_hawk",
		],
		boss: "d_chica",
		boss_color: "saddlebrown",
	},
	sfp: {
		name: "SOUTH FOREST" + color("+", colors.plus),
		color: "forestgreen",
		enemies: [
			"cp_boar",
			"cp_cat",
			"cp_woodpecker",
			"g_cat",
		],
		boss: "d_foxy",
		boss_color: "forestgreen",
	},
	efp: {
		name: "EAST FOREST" + color("+", colors.plus),
		color: "whitesmoke",
		enemies: [
			"cp_owl",
			"cp_beaver",
			"cp_wolf",
			"g_beaver",
		],
		boss: "d_bonnie",
		boss_color: "whitesmoke",
	},
	nfp: {
		name: "NORTH FOREST" + color("+", colors.plus),
		color: "black",
		enemies: [
			"dp_deer",
			"gd_deer",
			"dp_boar",
			"gd_boar",
			"dp_owl",
			"gd_owl",
		],
		boss: "dkf",
		boss_color: "maroon",
	},
	bonus: {
		name: color("BONUS", colors.bonus_zone),
		color: "darkviolet",
		enemies: [
			"fake_sponge",
			"fake_harry",
			"fake_null",
			"fake_null",
		],
		boss: "fake_god",
		boss_color: "maroon",
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
	bonus: "bonus",
};

let player_template = {
	name: "POPGOES THE WEASEL",
	name_long: "POPGOES THE WEASEL",
	name_short: "POPGOES",
	hp: 30,
	atk: 4,
	coins: 0,
	inv: [
		0,
		0,
		0,
		0,
		0,
		0,
	],
	jump: false,
	hook: false,
	dig: false,
	qp: false,
	spiky: false,
	location: "wf",
	cheat_menu: false,
};

let player = shallow_copy(player_template);

let cheats_template = {
	enemy_laser: laser_states.none,
	cheat_player_crit: cheat_states.random,
	cheat_enemy_crit: cheat_states.random,
	cheat_enemy_miss: cheat_states.random,
}

let cheats = shallow_copy(cheats_template);

let battle = {
	enemy: {
		name: "error: battle.enemy.name",
		hp: 0,
		crit: 0,
		spawn: 0,
		atk: 0,
		miss: 0,
		reward: 0,
		special: [
		],
	},
	enemy_hp: 0,
	enemy_charging: false,
	enemy_boss_count: 1,
	enemy_status_text: "",
	player_hp: 0,
	player_atk: 0,
	player_atk_plus: 0,
	player_def_plus: 0,
	player_shield: 0,
	player_items_used: [
		0,
		0,
		0,
		0,
		0,
		0,
	],
	player_jump: 3,
	player_hook: 3,
	player_shield: 3,
	qp_available: false,
	player_status_text: "",
	turn_count: 1,
};

let global_output_text = "error: global_output_text";

function local_update() {
	localStorage.setItem("local_data", JSON.stringify({player: player, cheats: cheats}));
}

function change_state(new_state) {
	div_list.forEach((i) => document.getElementById(i).style.display = new_state[i] ? "block" : "none");
	document.getElementById("div_battle_dkf").style.display = battle.enemy.special.includes(specials.dkf) ? "block" : "none";
	if (!player.cheat_menu) {
		document.getElementById("div_cheats").style.display = "none"
	}
	if (new_state.bg_color_area) {
		if (new_state.div_battle && battle.enemy.special.includes(specials.boss)) {
			document.body.style.backgroundColor = locations[player.location].boss_color;
		} else {
			document.body.style.backgroundColor = locations[player.location].color;
		}
	} else {
		document.body.style.backgroundColor = "black";
	}
	display_update();
}

function body_onload() {
	let temp_local_data = localStorage.getItem("local_data");
	if (temp_local_data) {
		let local_data = JSON.parse(temp_local_data);
		if (local_data.player) {
			player.hp = local_data.player.hp || player_template.hp;
			player.atk = local_data.player.atk || player_template.atk;
			player.coins = local_data.player.coins || player_template.coins;
			player.jump = local_data.player.jump || player_template.jump;
			player.hook = local_data.player.hook || player_template.hook;
			player.dig = local_data.player.dig || player_template.dig;
			player.qp = local_data.player.qp || player_template.qp;
			player.spiky = local_data.player.spiky || player_template.spiky;
			player.cheat_menu = local_data.player.cheat_menu || player_template.cheat_menu;
			if (local_data.player.inv) {
				item_list.forEach((i) => player.inv[i] = local_data.player.inv[i] || player_template.inv[i]);
			}
		}
		if (local_data.cheats) {
			cheats.enemy_laser = local_data.cheats.enemy_laser || cheats_template.enemy_laser;
			cheats.cheat_player_crit = local_data.cheats.cheat_player_crit || cheats_template.cheat_player_crit;
			cheats.cheat_enemy_crit = local_data.cheats.cheat_enemy_crit || cheats_template.cheat_enemy_crit;
			cheats.cheat_enemy_miss = local_data.cheats.cheat_enemy_miss || cheats_template.cheat_enemy_miss;
		}
	}
	change_state(states.menu);
}

function select_forest(forest_id) {
	player.location = forest_id;
	if (forest_id == location_id.nf || forest_id == location_id.nfp) {
		change_state(states.forest_north);
	} else {
		change_state(states.forest);
	}
}


function stat_edit(modified_stat, stat_action, modified_item = items.acorn) {
	switch (stat_info[modified_stat].type) {
		case stat_types.item:
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
		case stat_types.range:
			switch (stat_action) {
				case stat_actions.min:
					player[stat_info[modified_stat].name] = stat_info[modified_stat].min;
				break;
				case stat_actions.minus:
					player[stat_info[modified_stat].name] -= stat_info[modified_stat].step;
				break;
				case stat_actions.plus:
					player[stat_info[modified_stat].name] += stat_info[modified_stat].step;
				break;
				case stat_actions.max:
					player[stat_info[modified_stat].name] = stat_info[modified_stat].max;
				break;
			}
		break;
		case stat_types.bool:
			player[stat_info[modified_stat].name] = stat_action == stat_actions.on;
		break;
		case stat_types.cheat:
			switch (stat_action) {
				case stat_actions.random:
					cheats[stat_info[modified_stat].name] = cheat_states.random;
				break;
				case stat_actions.never:
					cheats[stat_info[modified_stat].name] = cheat_states.never;
				break;
				case stat_actions.always:
					cheats[stat_info[modified_stat].name] = cheat_states.always;
				break;
			}
		break;
		case stat_types.laser:
			switch (stat_action) {
				case stat_actions.never:
					cheats.enemy_laser = laser_states.none;
				break;
				case stat_actions.purple:
					cheats.enemy_laser = laser_states.purple;
				break;
				case stat_actions.random:
					cheats.enemy_laser = laser_states.random;
				break;
				case stat_actions.yellow:
					cheats.enemy_laser = laser_states.yellow;
				break;
			}
		break;
	}
	if (modified_stat == stat_id.cheat_menu) {
		change_state(states.stats);
	}
	local_update();
	display_update();
}

function reset_stats() {
	player = shallow_copy(player_template);
	cheats = shallow_copy(cheats_template);
	localStorage.clear();
	display_update();
}

function min_stats() {
	stat_edit(stat_id.hp, stat_actions.min);
	stat_edit(stat_id.atk, stat_actions.min);
	item_list.forEach((i) => stat_edit(stat_id.item, stat_actions.min, i));
	stat_edit(stat_id.jump, stat_actions.off);
	stat_edit(stat_id.hook, stat_actions.off);
	stat_edit(stat_id.dig, stat_actions.off);
	stat_edit(stat_id.qp, stat_actions.off);
	stat_edit(stat_id.spiky, stat_actions.off);
}

function max_stats() {
	stat_edit(stat_id.hp, stat_actions.max);
	stat_edit(stat_id.atk, stat_actions.max);
	item_list.forEach((i) => stat_edit(stat_id.item, stat_actions.max, i));
	stat_edit(stat_id.jump, stat_actions.on);
	stat_edit(stat_id.hook, stat_actions.on);
	stat_edit(stat_id.dig, stat_actions.on);
	stat_edit(stat_id.qp, stat_actions.on);
	stat_edit(stat_id.spiky, stat_actions.on);
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
	document.getElementById("text_stats_coins").innerHTML = player.coins + " COINS";
	stat_list.range.forEach((i) => {
		document.getElementById("text_stats_" + stat_info[i].name).innerHTML = stat_info[i].name_long + ": " + player[stat_info[i].name];
		document.getElementById("btn_stats_" + stat_info[i].name + "_min").disabled = player[stat_info[i].name] <= stat_info[i].min;
		document.getElementById("btn_stats_" + stat_info[i].name + "_minus").disabled = player[stat_info[i].name] <= stat_info[i].min;
		document.getElementById("btn_stats_" + stat_info[i].name + "_plus").disabled = player[stat_info[i].name] >= stat_info[i].max;
		document.getElementById("btn_stats_" + stat_info[i].name + "_max").disabled = player[stat_info[i].name] >= stat_info[i].max;
	});
	stat_list.bool.forEach((i) => {
		document.getElementById("text_stats_" + stat_info[i].name).innerHTML = color(stat_info[i].name_long, player[stat_info[i].name] ? colors.normal : colors.faded);
		document.getElementById("btn_stats_" + stat_info[i].name + "_off").disabled = !player[stat_info[i].name];
		document.getElementById("btn_stats_" + stat_info[i].name + "_on").disabled = player[stat_info[i].name];
	});
	item_list.forEach((i) => {
		document.getElementById("text_stats_inv_" + item_info[i].name).innerHTML = item_info[i].name_long + ": " + player.inv[i];
		document.getElementById("btn_stats_inv_" + item_info[i].name + "_min").disabled = player.inv[i] <= 0;
		document.getElementById("btn_stats_inv_" + item_info[i].name + "_minus").disabled = player.inv[i] <= 0;
		document.getElementById("btn_stats_inv_" + item_info[i].name + "_plus").disabled = player.inv[i] >= 99;
		document.getElementById("btn_stats_inv_" + item_info[i].name + "_max").disabled = player.inv[i] >= 99;
	});
	stat_list.cheat.forEach((i) => {
		document.getElementById("text_stats_" + stat_info[i].name).innerHTML = color(stat_info[i].name_long, cheats[stat_info[i].name] == cheat_states.random ? colors.faded : colors.normal);
		document.getElementById("btn_stats_" + stat_info[i].name + "_random").disabled = cheats[stat_info[i].name] == cheat_states.random;
		document.getElementById("btn_stats_" + stat_info[i].name + "_never").disabled = cheats[stat_info[i].name] == cheat_states.never;
		document.getElementById("btn_stats_" + stat_info[i].name + "_always").disabled = cheats[stat_info[i].name] == cheat_states.always;
	});
	switch (cheats.enemy_laser) {
		case laser_states.none:
			document.getElementById("text_stats_laser").innerHTML = color("LASER", colors.faded);
		break;
		case laser_states.purple:
			document.getElementById("text_stats_laser").innerHTML = color("LASER", colors.reflect);
		break;
		case laser_states.random:
			document.getElementById("text_stats_laser").innerHTML = color("LASER");
		break;
		case laser_states.yellow:
			document.getElementById("text_stats_laser").innerHTML = color("LASER", colors.bonus);
		break;
	}
	document.getElementById("btn_stats_laser_never").disabled = cheats.enemy_laser == laser_states.none;
	document.getElementById("btn_stats_laser_purple").disabled = cheats.enemy_laser == laser_states.purple;
	document.getElementById("btn_stats_laser_random").disabled = cheats.enemy_laser == laser_states.random;
	document.getElementById("btn_stats_laser_yellow").disabled = cheats.enemy_laser == laser_states.yellow;
	
	for (let i = 0; i < 6 && i < locations[player.location].enemies.length; i++) {
		document.getElementById("btn_enemy_" + i).innerHTML = enemies[locations[player.location].enemies[i]].name_long;
	}
	document.getElementById("btn_enemy_boss").innerHTML = enemies[locations[player.location].boss].name_long;
	
	document.getElementById("text_enemy_name").innerHTML = battle.enemy.name_long;
	document.getElementById("text_player_name").innerHTML = player.name_long;
	document.getElementById("div_enemy_hp_bar").style.width = (100 * nancatch(battle.enemy_hp / battle.enemy.hp)) + "%";
	document.getElementById("div_player_hp_bar").style.width = (100 * nancatch(battle.player_hp / player.hp)) + "%";
	
	document.getElementById("text_output").innerHTML = global_output_text;
	
	if (window.matchMedia("(max-width:30rem)").matches) {
		document.getElementById("text_enemy_atk").innerHTML = "";
		document.getElementById("text_player_atk").innerHTML = "";
		document.getElementById("text_enemy_atk").classList.add("marginless");
		document.getElementById("text_player_atk").classList.add("marginless");
		document.getElementById("text_enemy_hp").innerHTML = "HP:&nbsp;" + battle.enemy_hp + "/" + battle.enemy.hp + "  ATK:&nbsp;" + battle.enemy.atk + "  " + battle.enemy_status_text;
		document.getElementById("text_player_hp").innerHTML = "HP:&nbsp;" + battle.player_hp + "/" + player.hp + "  ATK:&nbsp;" + battle.player_atk + "  " + battle.player_status_text;
		document.getElementById("text_enemy_status").innerHTML = "";
		document.getElementById("text_player_status").innerHTML = "";
		document.getElementById("text_enemy_status").classList.add("marginless");
		document.getElementById("text_player_status").classList.add("marginless");
	} else {
		document.getElementById("text_enemy_atk").innerHTML = "ATK: " + battle.enemy.atk;
		document.getElementById("text_player_atk").innerHTML = "ATK: " + battle.player_atk;
		document.getElementById("text_enemy_atk").classList.remove("marginless");
		document.getElementById("text_player_atk").classList.remove("marginless");
		document.getElementById("text_enemy_hp").innerHTML = "HP: " + battle.enemy_hp + "/" + battle.enemy.hp;
		document.getElementById("text_player_hp").innerHTML = "HP: " + battle.player_hp + "/" + player.hp;
		document.getElementById("text_enemy_status").innerHTML = battle.enemy_status_text;
		document.getElementById("text_player_status").innerHTML = battle.player_status_text;
		document.getElementById("text_enemy_status").classList.remove("marginless");
		document.getElementById("text_player_status").classList.remove("marginless");
	}
	
	["jump", "hook", "dig"].forEach((i) => {
		if (player[i]) {
			document.getElementById("btn_battle_" + i).classList.add(i);
		} else {
			document.getElementById("btn_battle_" + i).classList.remove(i);
		}
		document.getElementById("btn_battle_" + i).disabled = battle["player_" + i] < 3;
		document.getElementById("btn_battle_" + i).innerHTML = i.toUpperCase() + (player[i] ? (battle["player_" + i] < 3 ? ("<br>(" + battle["player_" + i] + "/3)") : "<br>READY") : "");
	});
	if (battle.qp_available) {
		document.getElementById("btn_battle_items").classList.add("qp");
	} else {
		document.getElementById("btn_battle_items").classList.remove("qp");
	}
	
	document.getElementById("btn_battle_inv_acorn").innerHTML = "ACORN<br>+25% HP<br>x" + player.inv[items.acorn];
	document.getElementById("btn_battle_inv_acorn").disabled = player.inv[items.acorn] <= 0 || (battle.qp_available);
	document.getElementById("btn_battle_inv_fruit").innerHTML = "FRUIT<br>+50% HP<br>x" + player.inv[items.fruit];
	document.getElementById("btn_battle_inv_fruit").disabled = player.inv[items.fruit] <= 0 || (battle.qp_available);
	document.getElementById("btn_battle_inv_pizza").innerHTML = "PIZZA<br>FULL HP<br>x" + player.inv[items.pizza];
	document.getElementById("btn_battle_inv_pizza").disabled = player.inv[items.pizza] <= 0 || (battle.qp_available);
	document.getElementById("btn_battle_inv_atk").innerHTML = "ATK+<br>+50% 5T<br>x" + player.inv[items.atk];
	document.getElementById("btn_battle_inv_atk").disabled = player.inv[items.atk] <= 0;
	document.getElementById("btn_battle_inv_def").innerHTML = "DEF+<br>+33% 5T<br>x" + player.inv[items.def];
	document.getElementById("btn_battle_inv_def").disabled = player.inv[items.def] <= 0;
	document.getElementById("btn_battle_inv_shield").innerHTML = "SHIELD<br>INVN 3T<br>x" + player.inv[items.shield];
	document.getElementById("btn_battle_inv_shield").disabled = player.inv[items.shield] <= 0;
}

function start_battle_from_index(enemy_index) {
	battle.enemy = enemies[locations[player.location].enemies[enemy_index]];
	battle_reset();
}

function start_battle_from_location(location) {
	let enemy_list = locations[location].enemies;
	let weight_sum = 0;
	enemy_list.forEach((i) => weight_sum += enemies[i].weight);
	let weight_index = Math.random() * weight_sum;
	let enemy_chosen = false;
	enemy_list.forEach((i) => {
		if (!enemy_chosen && weight_index < enemies[i].weight) {
			battle.enemy = enemies[i];
			enemy_chosen = true;
		} else {
			weight_index -= enemies[i].weight;
		}
	});
	battle_reset();
}

function start_battle_from_location_boss(location) {
	battle.enemy = enemies[locations[location].boss];
	battle_reset();
}

function start_battle_from_id(enemy_id) {
	battle.enemy = enemies[enemy_id];
	battle_reset();
}

function battle_reset() {
	battle.player_hp = player.hp;
	battle.player_atk = player.atk;
	battle.player_atk_plus = 0;
	battle.player_def_plus = 0;
	battle.player_shield = 0;
	battle.player_jump = player.jump ? 3 : 0;
	battle.player_hook = player.hook ? 3 : 0;
	battle.player_dig = player.dig ? 3 : 0;
	battle.qp_available = player.qp;
	item_list.forEach((i) => battle.player_items_used[i] = 0);
	clear_player_status_text();
	battle.enemy_hp = battle.enemy.hp;
	battle.enemy_charging = false;
	battle.enemy_boss_count = 1;
	clear_enemy_status_text();
	battle.turn_count = 1;
	change_state(states.battle);
	clear_output_text();
	output_text("ENCOUNTERED " + color(battle.enemy.name_long));
	if (player.jump && (battle.enemy.progress.includes(progress_markers.tdf_act_1) || battle.enemy.progress.includes(progress_markers.jumpless))) {
		output_text_silent("WARNING: NOT POSSIBLE TO HAVE " + color("JUMP", colors.jump) + " ABILITY WITH THIS ENEMY");
	}
	if (player.hook && (battle.enemy.progress.includes(progress_markers.tdf_act_1) || battle.enemy.progress.includes(progress_markers.hookless))) {
		output_text_silent("WARNING: NOT POSSIBLE TO HAVE " + color("HOOK", colors.hook) + " ABILITY WITH THIS ENEMY");
	}
	if (player.dig && (battle.enemy.progress.includes(progress_markers.tdf_act_1) || battle.enemy.progress.includes(progress_markers.digless))) {
		output_text_silent("WARNING: NOT POSSIBLE TO HAVE " + color("DIG", colors.dig) + " ABILITY WITH THIS ENEMY");
	}
	if (player.qp && battle.enemy.progress.includes(progress_markers.tdf_act_1)) {
		output_text_silent("WARNING: NOT POSSIBLE TO HAVE " + color("QUICK POCKET") + " ABILITY WITH THIS ENEMY");
	}
	if (player.spiky && battle.enemy.progress.includes(progress_markers.tdf_act_1)) {
		output_text_silent("WARNING: NOT POSSIBLE TO HAVE " + color("SPIKY SHIELD") + " ABILITY WITH THIS ENEMY");
	}
	//
	output_text_silent("");
	if (battle.enemy.special.includes(specials.chica) || battle.enemy.special.includes(specials.foxy) || battle.enemy.special.includes(specials.bonnie)) {
		output_text_silent("BOSS TIMER: " + color("1"));
	}
	output_text_silent("NEXT TURN: " + color("1"));
	display_update();
}

function turn_use_item(used_item) {
	output_text(color(player.name_short) + " USED " + color(item_info[used_item].name_long));
	let player_healed = player.hp;
	switch (used_item) {
		case items.acorn:
			player_healed /= 2;
		case items.fruit:
			player_healed /= 2;
		case items.pizza:
			player_healed = Math.round(player_healed);
			battle.player_hp += player_healed;
			if (battle.player_hp > player.hp) {
				battle.player_hp = player.hp;
			}
			output_text(color(player.name_short) + " GAINED " + color(player_healed, colors.heal) + color(" HP"));
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
}

function turn_win() {
	battle.enemy_hp = 0;
	change_state(states.battle_win);
	output_text_silent("");
	output_text(color("YOU WIN!"));
	player.coins += battle.enemy.reward;
	output_text("PRIZE: " + color(battle.enemy.reward) + " COINS");
	local_update();
}

function turn_hander(player_action, used_item = items.acorn) {
	change_state(states.battle);
	clear_output_text();
	
	let enemy_damaged = battle.player_atk;
	let player_blocking = false;
	let qp_turn = battle.qp_available && player_action == actions.item;
	let active_laser = laser_states.none;
	if (battle.enemy.special.includes(specials.dkf)) {
		active_laser = cheats.enemy_laser;
	}
	if (active_laser == laser_states.random) {
		active_laser = randbool(0.5) ? laser_states.yellow : laser_states.purple;
	}
	switch (player_action) {
		case actions.attack:
			output_text(color(player.name_short) + " ATTACKED");
			if (battle.enemy.special.includes(specials.chica) && battle.enemy_boss_count >= 3) {
				battle.enemy_boss_count = 0;
				output_text(color("JUMP!", colors.jump));
			} else {
				if (active_laser == laser_states.purple) {
					output_text(color("REFLECT!", colors.reflect));
					enemy_damaged *= 2;
				}
				if (active_laser == laser_states.yellow) {
					output_text(color("BONUS!", colors.bonus));
					enemy_damaged *= 1.5;
				}
				let player_crit = false;
				if (
					cheats.cheat_player_crit != cheat_states.never
					&&
					(randbool(0.1) || cheats.cheat_player_crit == cheat_states.always)
				) {
					player_crit = true;
					enemy_damaged *= 3;
					output_text(color("CRIT!", colors.crit));
				}
				enemy_damaged = Math.round(enemy_damaged);
				if (active_laser == laser_states.purple) {
					battle.player_hp -= enemy_damaged;
					output_text(color(player.name_short) + " LOST " + color(enemy_damaged, player_crit ? colors.crit : colors.normal) + color(" HP"));
				} else {
					battle.enemy_hp -= enemy_damaged;
					output_text(color(battle.enemy.name_long) + " LOST " + color(enemy_damaged, player_crit ? colors.crit : colors.normal) + color(" HP"));
				}
			}
		break;
		case actions.block:
			player_blocking = true;
			output_text(color(player.name_short) + " BLOCKED");
		break;
		case actions.item:
			player.inv[used_item]--;
			battle.player_items_used[used_item]++;
			turn_use_item(used_item);
		break;
		case actions.jump:
			battle.player_jump = 0;
			output_text(color(player.name_short) + " USED " + color("JUMP", colors.jump));
		break;
		case actions.hook:
			battle.player_hook = 0;
			output_text(color(player.name_short) + " USED " + color("HOOK", colors.hook));
			if (battle.enemy.special.includes(specials.chica) && battle.enemy_boss_count >= 3) {
				battle.enemy_boss_count = 0;
				output_text(color("JUMP!", colors.jump));
			} else {
				if (active_laser == laser_states.purple) {
					output_text(color("REFLECT!", colors.reflect));
					enemy_damaged *= 2;
				}
				if (active_laser == laser_states.yellow) {
					output_text(color("BONUS!", colors.bonus));
					enemy_damaged *= 1.5;
				}
				output_text(color("HOOK!", colors.hook));
				enemy_damaged *= 3;
				enemy_damaged = Math.round(enemy_damaged);
				if (active_laser == laser_states.purple) {
					battle.player_hp -= enemy_damaged;
					output_text(color(player.name_short) + " LOST " + color(enemy_damaged, colors.hook) + color(" HP"));
				} else {
					battle.enemy_hp -= enemy_damaged;
					output_text(color(battle.enemy.name_long) + " LOST " + color(enemy_damaged, colors.hook) + color(" HP"));
				}
			}
		break;
		case actions.dig:
			battle.player_dig = 0;
			output_text(color(player.name_short) + " USED " + color("DIG", colors.dig));
			output_text(color("DIG!", colors.dig));
			let dig_item = items.acorn;
			let item_index = Math.random() * 100;
			let item_chosen = false;
			item_list.forEach((i) => {
				if (!item_chosen && item_index < item_info[i].weight) {
					dig_item = i;
					item_chosen = true;
				} else {
					item_index -= item_info[i].weight;
				}
			});
			turn_use_item(dig_item);
		break;
	}
	
	let enemy_charged = false;
	if (battle.enemy_charging) {
		enemy_charged = true;
		battle.enemy_charging = false;
	}
	let enemy_hook = false;
	if (battle.enemy.special.includes(specials.foxy) && battle.enemy_boss_count >= 3 && !enemy_charged) {
		enemy_hook = true;
	}
	if (battle.enemy_hp <= 0) {
		turn_win();
	} else if (!qp_turn) {
		output_text_silent("");
		if (battle.enemy.special.includes(specials.bonnie) && battle.enemy_boss_count >= 3 && !enemy_charged) {
			battle.enemy_boss_count = 0;
			output_text(color("DIG!", colors.dig));
			output_text(color(battle.enemy.name_long) + " USED " + color("ACORN"));
			let enemy_healed = Math.round(battle.enemy.hp / 4);
			battle.enemy_hp += enemy_healed;
			if (battle.enemy_hp > battle.enemy.hp) {
				battle.enemy_hp = battle.enemy.hp;
			}
			output_text(color(battle.enemy.name_long) + " GAINED " + color(enemy_healed, colors.heal) + color(" HP"));
		} else if (
			!enemy_charged && !enemy_hook
			&&
			battle.enemy.crit > 0
			&&
			(battle.enemy_crit >= 100 || cheats.cheat_enemy_crit != cheat_states.never)
			&&
			(randbool(battle.enemy.crit / 100) || cheats.cheat_enemy_crit == cheat_states.always)
		) {
			battle.enemy_charging = true;
			output_text(color(battle.enemy.name_long) + " IS " + color("CHARGING", colors.crit));
			if (player_action == actions.jump) {
				output_text(color("JUMP!", colors.jump));
			}
		} else {
			output_text(color(battle.enemy.name_long) + " ATTACKED");
			let player_damaged = battle.enemy.atk;
			let player_damage_color = colors.normal;
			if (player_action == actions.jump) {
				if (enemy_hook) {
					battle.enemy_boss_count = 0;
				}
				output_text(color("JUMP!", colors.jump));
			} else if (
				battle.enemy.miss > 0
				&&
				(battle.enemy_miss >= 100 || cheats.cheat_enemy_miss != cheat_states.never)
				&&
				(randbool(battle.enemy.miss / 100) || cheats.cheat_enemy_miss == cheat_states.always)
			) {
				if (enemy_hook) {
					battle.enemy_boss_count = 0;
				}
				output_text(color("MISS!", colors.miss));
			} else if (battle.player_shield > 0) {
				if (battle.enemy.special.includes(specials.dkf) && enemy_charged) {
					battle.player_shield = 0;
					output_text(color(battle.enemy.name_long) + " BROKE " + color("SHIELD", colors.shield));
					if (player_blocking) {
						player_damaged /= 2;
						//output_text(color("BLOCK!"));
					}
					if (battle.player_def_plus > 0) {
						player_damaged = player_damaged * 2 / 3;
					}
					player_damaged = Math.round(player_damaged * 3 / 2);
					battle.player_hp -= player_damaged;
					output_text(color(player.name_short) + " LOST " + color(player_damaged, colors.crit) + color(" HP"));
				} else {
					output_text(color("SHIELD!", colors.shield));
					if (player.spiky) {
						if (enemy_charged) {
							player_damaged *= 3;
							player_damage_color = colors.crit;
						}
						if (enemy_hook) {
							battle.enemy_boss_count = 0;
							player_damaged *= 5;
							player_damage_color = colors.hook;
						}
						player_damaged = Math.round(player_damaged / 2);
						battle.enemy_hp -= player_damaged;
						output_text(color(battle.enemy.name_long) + " LOST " + color(player_damaged, player_damage_color) + color(" HP"));
					}
				}
			} else {
				if (player_blocking) {
					player_damaged /= 2;
					output_text(color("BLOCK!"));
				}
				if (battle.player_def_plus > 0) {
					player_damaged = player_damaged * 2 / 3;
				}
				if (enemy_charged) {
					player_damaged *= 3;
					player_damage_color = colors.crit;
					output_text(color("CRIT!", colors.crit));
				}
				if (enemy_hook) {
					battle.enemy_boss_count = 0;
					player_damaged *= 5;
					player_damage_color = colors.hook;
					output_text(color("HOOK!", colors.hook));
				}
				player_damaged = Math.round(player_damaged);
				battle.player_hp -= player_damaged;
				output_text(color(player.name_short) + " LOST " + color(player_damaged, player_damage_color) + color(" HP"));
			}
			battle.enemy_charging = false;
		}
		if (battle.enemy_hp <= 0) {
			turn_win();
		} else if (battle.player_hp <= 0) {
			battle.player_hp = 0;
			change_state(states.battle_lose);
			output_text_silent("");
			item_list.forEach((i) => player.inv[i] += battle.player_items_used[i]);
			output_text(color("YOU LOSE..."));
		}
	}
	output_text_silent("");
	
	if (!qp_turn) {
		if (player.jump && battle.player_jump < 3) {
			battle.player_jump++;
		}
		if (player.hook && battle.player_hook < 3) {
			battle.player_hook++;
		}
		if (battle.player_dig < 3 && player.dig) {
			battle.player_dig++;
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
	}
	
	clear_enemy_status_text();
	clear_player_status_text();
	if (battle.enemy_charging) {
		enemy_status_text(color("CHARGING", colors.crit));
	}
	if (battle.player_atk_plus > 0) {
		if (battle.player_atk_plus == 1) {
			output_text_silent("ATK+: " + color("1") + " TURN LEFT")
			player_status_text(color("ATK+", colors.faded));
		} else {
			output_text_silent("ATK+: " + color(battle.player_atk_plus) + " TURNS LEFT")
			player_status_text("ATK+");
		}
	} else {
		battle.player_atk = player.atk;
	}
	if (battle.player_def_plus > 0) {
		if (battle.player_def_plus == 1) {
			output_text_silent("DEF+: " + color("1") + " TURN LEFT")
			player_status_text(color("DEF+", colors.faded));
		} else {
			output_text_silent("DEF+: " + color(battle.player_def_plus) + " TURNS LEFT")
			player_status_text("DEF+");
		}
	}
	if (battle.player_shield > 0) {
		if (battle.player_shield == 1) {
			output_text_silent("SHIELD: " + color("1") + " TURN LEFT")
			player_status_text(color("SHIELD", colors.shield_faded));
		} else {
			output_text_silent("SHIELD: " + color(battle.player_shield) + " TURNS LEFT")
			player_status_text(color("SHIELD", colors.shield));
		}
	}
	battle.qp_available = false;
	if (!qp_turn) {
		battle.turn_count++;
	}
	if (battle.enemy.special.includes(specials.chica) || battle.enemy.special.includes(specials.foxy) || battle.enemy.special.includes(specials.bonnie)) {
		if (!qp_turn) {
			battle.enemy_boss_count++;
		}
		output_text_silent("BOSS TIMER: " + color(battle.enemy_boss_count));
	}
	output_text_silent("NEXT TURN: " + color(battle.turn_count));
	display_update();
}

function battle_info() {
	clear_output_text();
	output_text_silent("NAME: " + color(battle.enemy.name_long));
	output_text_silent("LOCATION: " + color(battle.enemy.location));
	output_text_silent("HP: " + color(battle.enemy.hp));
	output_text_silent("ATK: " + color(battle.enemy.atk));
	output_text_silent("CRIT: " + color(battle.enemy.crit) + "%");
	output_text_silent("MISS: " + color(battle.enemy.miss) + "%");
	output_text_silent("SPAWN: " + color(battle.enemy.spawn) + "%");
	output_text_silent("REWARD: " + color(battle.enemy.reward) + " COINS");
	display_update();
}