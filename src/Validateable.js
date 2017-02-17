export default class Validateable {

	constructor(){}

  constraints(){
  	throw new Error("Constraints method must be implemented");
	}

	validate() {
		let validationState = true;
		const results = [];
		const constraints = this.constraints();
		Object.keys(constraints).forEach(x => {
			if (constraints.hasOwnProperty(x)) {
				const validator = constraints[x];
				results.push(validator(this[x]));
			}
		});

		results.forEach(x => {
			if (x === false) validationState = false
		});

		return validationState;
	}
}