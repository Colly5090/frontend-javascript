// Define a unique type for MajorCredits
export interface MajorCredits {
  credits: number;
  _brand: void;
}

// Define a unique type for MinorCredits
export interface MinorCredits {
  credits: number;
  _brand: void;
}

// Function to sum major credits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: undefined,
  };
}

// Function to sum minor credits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: undefined, 
  };
}
