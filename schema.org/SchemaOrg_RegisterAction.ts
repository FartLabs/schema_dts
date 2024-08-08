// DO NOT EDIT: This file is generated.
import type { SchemaOrg_InteractAction } from "./SchemaOrg_InteractAction.ts";

/**
 * The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [[FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 * @see https://schema.org/RegisterAction
 */
export const SCHEMA_ORG_RegisterAction =
  "https://schema.org/RegisterAction" as const;

/**
 * The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [[FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 * @see https://schema.org/RegisterAction
 */
export type SchemaOrg_RegisterAction = SchemaOrg_InteractAction;
