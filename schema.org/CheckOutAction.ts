// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCommunicateAction } from "./CommunicateAction.ts";

/** The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check-in) or place (e.g. hotel).\n\nRelated actions:\n\n* [[CheckInAction]]: The antonym of CheckOutAction.\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service. */
export interface ClassCheckOutAction extends ClassCommunicateAction {
}
