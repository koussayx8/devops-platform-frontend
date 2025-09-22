export interface Course {
  numCourse?: number;
  level: number;
  typeCourse: TypeCourse;
  support: Support;
  price: number;
  timeSlot: number;
  registrations?: any[];
}

export enum TypeCourse {
  COLLECTIVE_CHILDREN = 'COLLECTIVE_CHILDREN',
  COLLECTIVE_ADULT = 'COLLECTIVE_ADULT',
  INDIVIDUAL = 'INDIVIDUAL'
}

export enum Support {
  SKI = 'SKI',
  SNOWBOARD = 'SNOWBOARD'
}




