import { User } from './user';
import { Role } from './role';
import { Team } from './team';
import { TeamSettings } from './team';
import { Document } from './document';
import { Link } from './link';
import { Picture } from './picture';
import { Video } from './video';
import { FaqEntry } from './faq-entry';
import { Message } from './message';
import { Conversation } from './conversation';
import { Poll } from './poll';
import { Comment } from './comment';
import { Activity } from './activity';
import { Notification } from './notification';

export const All = [
    User, Role, Team, TeamSettings,
    // objects
    Document, Poll, FaqEntry, Picture, Video, Link,
    // interaction
    Activity, Comment, Notification,
    // direct Messaging
    Message, Conversation,
]