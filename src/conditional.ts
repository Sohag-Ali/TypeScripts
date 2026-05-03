type A = null
type B = undefined
type C = A extends B ? string : number; // C is number because null does not extend undefined

type D = B extends A ? string : number; // D is number because undefined does not extend null

type RichPeopleVehicles = {
    bike: string;
    car: string;
    yacht: string;
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicles ? 'Rich' : 'Not Rich';

type HasBike = CheckVehicle<"bike">; // "Rich" because "bike" extends RichPeopleVehicles