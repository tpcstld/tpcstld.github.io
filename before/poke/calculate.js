document.getElementById("text").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    showResults(calculate(getInput()));
  }
});

function addNodes(data, id) {
  document.getElementById(id).innerHTML = "";
  Object.keys(data).forEach(x => document
    .getElementById(id)
    .insertAdjacentHTML("beforeend", "<dd>" + x + " (" + data[x] + ")" + "</dd>")
  );
}

function showResults(results) {
  Object.keys(results.defense).forEach(x => {
    if (results.defense[x] === 0) {
      results.defense[x] = "IMMUNE";
    }
  });
  addNodes(_(results.defense).pick(v => v < 1 || v === "IMMUNE"), "resist");
  addNodes(_(results.defense).pick(v => v > 1), "weak");
  addNodes(results.good_against, "strong");

  document.getElementById("bad").innerHTML = "";
  Object.keys(results.bad_against).forEach(x => document
    .getElementById("bad")
    .insertAdjacentHTML("beforeend", results.careful.includes(x)
      ? "<dd style='color: red'>" + x + " (" + results.bad_against[x] + ")</dd>"
      : "<dd>" + x + " (" + results.bad_against[x] + ")</dd>")
  );
}

function getInput() {
  return Array.from(
    new Set(
      document
        .getElementById("text")
        .value
        .split(" ")
        .map(data => data.trim())
        .map(data => data.toLowerCase())
        .filter(data => data)
    )
  );
}

function calculate(types) {
  if (types.length === 0) {
    return {
      "defense": {},
      "good_against": {},
      "bad_against": {},
      "careful": [],
    };
  }

  let result = {
    "immunities": types
      .map(t => Object.keys(TYPE_INFO)
        .filter(ta => TYPE_INFO[ta].resisted_by.includes(t)))
      .reduce((a, b) => a.concat(b)),
    "resistances": types
      .map(t => Object.keys(TYPE_INFO)
        .filter(ta => TYPE_INFO[ta].bad.includes(t)))
      .reduce((a, b) => a.concat(b)),
    "weaknesses": types
      .map(t => Object.keys(TYPE_INFO)
        .filter(ta => TYPE_INFO[ta].good.includes(t)))
      .reduce((a, b) => a.concat(b)),
    "strengths": types
      .map(t => TYPE_INFO[t].good)
      .reduce((a, b) => a.concat(b)),
    "low_damage": Object.keys(TYPE_INFO)
      .filter(t => types.every(ta => TYPE_INFO[ta].bad.includes(t))),
    "resisted_by": Object.keys(TYPE_INFO)
      .filter(t => types.every(ta => TYPE_INFO[ta].resisted_by.includes(t)))
  };

  let defense = Object.keys(TYPE_INFO)
    .reduce((r, i) => { r[i] = 1; return r; }, {});
  defense = result.immunities
    .reduce((r, i) => { r[i] = 0; return r; }, defense);
  defense = result.resistances
    .reduce((r, i) => { r[i] = r[i] / 2; return r; }, defense);
  defense = result.weaknesses
    .reduce((r, i) => { r[i] = r[i] * 2; return r; }, defense);

  let good_against = types
    .map(t => ({ "types": TYPE_INFO[t].good, "type": t}))
    .reduce((r, i) => {
      i.types.forEach(t => r[t] ? r[t].push(i.type) : r[t] = [i.type]);
      return r;
    }, {});

  let bad_against = types
    .map(t => ({ "types": TYPE_INFO[t].bad, "type": t}))
    .reduce((r, i) => {
      i.types.forEach(t => r[t] ? r[t].push(i.type) : r[t] = [i.type]);
      return r;
    }, {});

  bad_against = types
    .map(t => ({ "types": TYPE_INFO[t].resisted_by, "type": t}))
    .reduce((r, i) => {
      i.types.forEach(t => r[t] ? r[t].push(i.type.toUpperCase()) : r[t] = [i.type.toUpperCase()]);
      return r;
    }, bad_against);

  let careful = Object
    .keys(bad_against)
    .filter(t => Object.keys(good_against).includes(t));

  return {
    "defense": defense,
    "good_against": good_against,
    "bad_against": bad_against,
    "careful": careful,
  };
}
