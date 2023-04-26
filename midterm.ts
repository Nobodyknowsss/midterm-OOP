interface ExerciseMethods {
  warmUp(): void;
  stretch(): void;
  run(): void;
  liftWeights(): void;
  cardio(): void;
  rest(): void;
  hydrate(): void;
  strengthTraining(): void;
  preparation(): void;
  coolDown(): void;
}

abstract class Exercise implements ExerciseMethods {
  public intensity: string;
  public durationInMinutes: number;
  private equipment: string;
  protected targetCaloriesBurned: number;
  protected targetMuscles: string;
  protected location: string;
  protected startTime: string;
  private bodyType: string;
  private trainerName: string;
  private traineeName: string;

  constructor(
    intensity: string,
    durationInMinutes: number,
    equipment: string,
    targetCaloriesBurned: number,
    targetMuscles: string,
    location: string,
    startTime: string,
    bodyType: string,
    trainerName: string,
    traineeName: string,

  ) {
    this.intensity = intensity;
    this.durationInMinutes = durationInMinutes;
    this.equipment = equipment;
    this.targetCaloriesBurned = targetCaloriesBurned;
    this.targetMuscles = targetMuscles;
    this.location = location;
    this.startTime = startTime;
    this.bodyType = bodyType;
    this.trainerName = trainerName;
    this.traineeName = traineeName;
  }
  public getEquipment(): string {
    return this.equipment;
  }

  public setEquipment(equipment: string): void {
    this.equipment = equipment;
  }

  public getTrainerName(): string {
    return this.trainerName;
  }

  public setTrainerName(trainerName: string): void {
    this.trainerName = trainerName;
  }

  public getTraineeName(): string {
    return this.traineeName;
  }

  public setTraineeName(traineeName: string): void {
    this.traineeName = traineeName;
  }

  public getbodyType(): string {
    return this.bodyType;
  }

  public setbodyType(bodyType: string): void {
    this.bodyType = bodyType;
  }

  public warmUp(): void {
    console.log("Warming up");
  }

  public stretch(): void {
    console.log("Stretching");
  }

  public run(): void {
    console.log("Running");
  }

  public liftWeights(): void {
    console.log("Lifting weights");
  }

  public coolDown(): void {
    console.log("Cooling down");
  }

  public cardio(): void {
    console.log("Doing cardio exercise");
  }

  public strengthTraining(): void {
    console.log("Doing strength training exercise");
  }

  public rest(): void {
    console.log("Resting");
  }

  public hydrate(): void {
    console.log("Drinking water");
  }

  public preparation(): void {
    console.log("Person is preparing");
  }
}

class Cardio extends Exercise {
  private _distanceInMiles: number;

  constructor(
    intensity: string,
    durationInMinutes: number,
    equipment: string,
    targetCaloriesBurned: number,
    targetMuscles: string,
    location: string,
    startTime: string,
    bodyType: string,
    trainerName: string,
    traineeName: string,
    distanceInMiles: number
  ) {
    super(
      intensity,
      durationInMinutes,
      equipment,
      targetCaloriesBurned,
      targetMuscles,
      location,
      startTime,
      bodyType,
      trainerName,
      traineeName
    );
    this._distanceInMiles = distanceInMiles;
  }

  public get distanceInMiles(): number {
    return this._distanceInMiles;
  }

  public set distanceInMiles(value: number) {
    this._distanceInMiles = value;
  }


   //  override methods
  public run(): void {
    console.log(
      `${this.getTrainerName()} ordered ${this.getTraineeName()} to run ${this._distanceInMiles} miles`
    );
  }

  public preparation(): void {
    console.log(`${this.getTrainerName()} ordered ${this.getTraineeName()} to prepare for the exercise`)
  }

  public coolDown(): void {
    console.log(`After the exercise ${this.getTraineeName()} cooldown for ${this.durationInMinutes} minutes`)
    
  }

  public rest(): void {
    if(this.intensity === "light"){
      console.log(`${this.getTraineeName()} rests every 45min`)
    }else if(this.intensity === "moderate"){
      console.log(`${this.getTraineeName()} rests every 30min`)
    }else if(this.intensity === "hard"){
      console.log(`${this.getTraineeName()} rests every 15min`)
    }
  }

  // unique methods

  restCount(totalTime : number){
    if(this.getbodyType() === "endomorph"){
      console.log(this.getTraineeName() +(Math.round(totalTime / 15)) +"times during the exercise")
    }else if(this.getbodyType() === "ectomorph"){
      console.log(this.getTraineeName() +(Math.round(totalTime / 30)) +"times during the exercise")
    }else if(this.getbodyType() === "mesomorph"){
      console.log(this.getTraineeName() +(Math.round(totalTime / 45)) +"times during the exercise")
    }
  }

  cardioEndurance(duration:number):void{
    if(duration > 30){
      console.log(`${this.getTraineeName()} lung capacity is above average`)
    }else if(duration > 15){
      console.log(`${this.getTraineeName()} lung capacity is average`)
    }else{
      console.log(`${this.getTraineeName()} lung capacity is below average`)
    }
  }

  timeToBurnCalories():void{
    if(this.targetCaloriesBurned > 150){
    console.log(`${this.getTraineeName()} will exercise for 15mins`)
    }
    else if(this.targetCaloriesBurned > 50){
    console.log(`${this.getTraineeName()} will exercise for 10mins`)
    }else{
    console.log(`${this.getTraineeName()} will exercise for 5mins`)
    }
  }

  typeOfExercise(exercise : string){
    if(exercise === "swimming"){
      console.log(`${this.getTraineeName()} should do aquatic exercise`)
    }else{
      console.log(`${this.getTraineeName()} should do land exercise`)
    }
  }
exerciseDuration(){
  if(this.intensity === "light"){
    console.log(`${this.getTraineeName()} should exercise atleast 60minutes`)
  }else if(this.intensity === "moderate"){
    console.log(`${this.getTraineeName()} should exercise atleast 40minutes`)
  }else if(this.intensity === "hard"){
    console.log(`${this.getTraineeName()} should exercise atleast 20minutes`)
  }
}
}



class Strength extends Exercise {
  private _weight: number;

  constructor(
    intensity: string,
    durationInMinutes: number,
    equipment: string,
    targetCaloriesBurned: number,
    targetMuscles: string,
    location: string,
    startTime: string,
    bodyType: string,
    trainerName: string,
    traineeName: string,
    weight: number
  ) {
    super(
      intensity,
      durationInMinutes,
      equipment,
      targetCaloriesBurned,
      targetMuscles,
      location,
      startTime,
      bodyType,
      trainerName,
      traineeName

    );
    this._weight = weight;
  }

  public get weight(): number {
    return this._weight;
  }

  public set weight(value: number) {
    this._weight = value;
  }

  // Override methods

  public liftWeights(): void {
    if(this.intensity === "light"){
      console.log(`${this.getTraineeName()} is lifting ${this._weight + "kg"} of weights`)
    }else if(this.intensity === "moderate"){
      console.log(`${this.getTraineeName()} is lifting ${this._weight * 2 + "kg"} of weights`)
    }else if(this.intensity === "hard"){
      console.log(`${this.getTraineeName()} is lifting ${this._weight * 3 + "kg"} of weights`)
    }
  }

  public strengthTraining(): void {
    console.log(`${this.getTraineeName()} is using ${this.getEquipment()} to improve his/her ${this.targetMuscles}`);
  }

  public stretch(): void {
    console.log(`${this.getTraineeName()} and ${this.getTrainerName()} entered the ${this.location} at ${this.startTime} and immediately began stretching`)
  }
  public hydrate(): void {
    if(this.getbodyType() === "endomorph"){
      console.log(`${this.getTraineeName()} drink water every 20mins`)
    }else if(this.getbodyType() === "ectomorph"){
      console.log(`${this.getTraineeName()} drink water every 40mins`)
    }else if(this.getbodyType() === "mesomorph"){
      console.log(`${this.getTraineeName()} drink water every 60mins`)
    }
  }

  public preparation(): void {
    if(this.targetMuscles === "legs"){
      console.log(`${this.getTraineeName()} should use stationary bike for ${this.durationInMinutes} minutes`)
    }else if(this.targetMuscles === "biceps"){
      console.log(`${this.getTraineeName()} should use barbell for ${this.durationInMinutes} minutes`)
    }
  } 

  // unique methods

  public changeEquipment() : void{
    if(this.targetMuscles === "legs"){
      this.setEquipment("stationary bike")
    }else if(this.targetMuscles === "biceps"){
      this.setEquipment("barbell")
    }else if(this.targetMuscles === "chest"){
      this.setEquipment("chest press machine")
    }
  }

  public burnedCalories(): void{
    if(this.intensity === "light"){
      console.log(`${this.targetCaloriesBurned + "calories"} has been burned`)
    }else if(this.intensity === "moderate"){
      console.log(`${(this.targetCaloriesBurned * 2) + "calories" } has been burned`)    
    }else if(this.intensity === "moderate"){
      console.log(`${(this.targetCaloriesBurned * 3) + "calories" } has been burned`)    
    }
  }

  public hydrateCount(totalTime:number) : void{
    if(this.getbodyType() === "endomorph"){
      console.log(this.getTraineeName() +(Math.round(totalTime / 20)) +" drink times during the exercise")
    }else if(this.getbodyType() === "ectomorph"){
      console.log(this.getTraineeName() +(Math.round(totalTime / 40)) +" drink times during the exercise")
    }else if(this.getbodyType() === "mesomorph"){
      console.log( this.getTraineeName() +(Math.round(totalTime / 60)) +" drink times during the exercise")
    }
  }

 changeIntensity(intesity:string){
  this.intensity = this.intensity
  console.log(`The intensity has been change to ${intesity}`)
 }
 
 recommend():void{
  if(this.getbodyType() === "endomorph"){
    console.log(`${this.getTraineeName()} should eatmore healthy foods and have healthy lifestyle`)
  }else if(this.getbodyType() === "ectomorph"){
    console.log(`${this.getTraineeName()} should eat less unhealthy foods and have a regular exercise`)
  }else if(this.getbodyType() === "mesomorph"){
    console.log(`${this.getTraineeName()} should maintain his/her diet and lifestyle`)
  }
 }
}

let lois = new Cardio("hard", 5, "dumbells", 300, "chest", "gym", "5:00", "Mesomorph", "Rizz", "Lois", 3)
lois.run()
lois.preparation()
lois.coolDown()
lois.rest()
lois.restCount(120)
lois.cardioEndurance(16)
lois.timeToBurnCalories()
lois.typeOfExercise("swimming")
lois.exerciseDuration()
let sheree = new Strength("hard", 10, "dumbells", 300, "biceps", "gym", "5:00", "Mesomorph", "Rizz", "Sheree", 5)
sheree.liftWeights()
sheree.strengthTraining()
sheree.stretch()
sheree.hydrate()
sheree.preparation()
sheree.changeEquipment()
sheree.burnedCalories()
sheree.hydrateCount(120)
sheree.changeIntensity("moderate")
sheree.recommend()
