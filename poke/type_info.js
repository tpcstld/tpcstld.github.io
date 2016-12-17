var TYPE_INFO = {
  "normal": {
    "good": [],
    "bad": ["rock", "steel"],
    "resisted_by": ["ghost"]
  },
  "fire": {
    "good": ["bug", "grass", "ice", "steel"],
    "bad": ["dragon", "fire", "rock", "water"],
    "resisted_by": [],
  },
  "fighting": {
    "good": ["dark", "ice", "normal", "rock", "steel"],
    "bad": ["bug", "fairy", "flying", "poison", "psychic"],
    "resisted_by": ["ghost"],
  },
  "water": {
    "good": ["fire", "ground", "rock"],
    "bad": ["dragon", "grass", "water"],
    "resisted_by": [],
  },
  "flying": {
    "good": ["bug", "fighting", "grass"],
    "bad": ["electric", "rock", "steel"],
    "resisted_by": [],
  },
  "grass": {
    "good": ["ground", "rock", "water"],
    "bad": ["bug", "dragon", "fire", "flying", "grass", "poison", "steel"],
    "resisted_by": [],
  },
  "poison": {
    "good": ["fairy", "grass"],
    "bad": ["poison", "ground", "rock", "ghost"],
    "resisted_by": ["steel"],
  },
  "electric": {
    "good": ["flying", "water"],
    "bad": ["dragon", "electric", "grass"],
    "resisted_by": ["ground"],
    "notes": "Cannot be paralyzed.",
  },
  "ground": {
    "good": ["electric", "fire", "poison", "rock", "steel"],
    "bad": ["bug", "grass"],
    "resisted_by": ["flying"],
    "notes": "Immune to sandstorm.",
  },
  "psychic": {
    "good": ["fighting", "poison"],
    "bad": ["psychic", "steel"],
    "resisted_by": ["dark"],
  },
  "rock": {
    "good": ["bug", "fire", "flying", "ice"],
    "bad": ["fighting", "ground", "steel"],
    "resisted_by": [],
  },
  "ice": {
    "good": ["dragon", "flying", "grass", "ground"],
    "bad": ["fire", "ice", "steel", "water"],
    "resisted_by": [],
  },
  "bug": {
    "good": ["dark", "grass", "psychic"],
    "bad": ["fairy", "fighting", "fire", "flying", "ghost", "poison", "steel"],
    "resisted_by": [],
  },
  "dragon": {
    "good": ["dragon"],
    "bad": ["steel"],
    "resisted_by": ["fairy"],
  },
  "ghost": {
    "good": ["ghost", "psychic"],
    "bad": ["dark"],
    "resisted_by": ["normal"],
    "notes": "Immune to effects that prevent recall or escape.",
  },
  "dark": {
    "good": ["ghost", "psychic"],
    "bad": ["dark", "fairy", "fighting"],
    "resisted_by": [],
  },
  "steel": {
    "good": ["fairy", "ice", "rock"],
    "bad": ["electric", "fire", "steel", "water"],
    "resisted_by": [],
  },
  "fairy": {
    "good": ["dark", "dragon", "fighting"],
    "bad": ["fire", "poison", "steel"],
    "resisted_by": [],
  },
};

