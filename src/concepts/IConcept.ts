export interface IConcept {
  name: string;
  description?: string;
  topics?: string[]
  component: React.FC;
}
