// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganizeAction } from "./OrganizeAction.ts";

/** The act of planning the execution of an event/task/action/reservation/plan to a future date. */
export interface ClassPlanAction extends ClassOrganizeAction {
  /** The time the object is scheduled to. */
  scheduledTime: Array<string>;
}
