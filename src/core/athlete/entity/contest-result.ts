import { Discipline } from 'shared/enums';

export class AthleteContestResult {
  public athleteId: string;
  public contestId: string;
  public contestDate: number;
  public contestDiscipline: Discipline;
  public points: number;
  public place: number;
  public createdAt?: number;
}