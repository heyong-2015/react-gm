import {EventEmitter} from 'gm-util';

const event_prefix = 'GM_EVENT_';

const Emitter = new EventEmitter();

const TYPE = {
    MODAL_SHOW: event_prefix + 'MODAL_SHOW',
    MODAL_HIDE: event_prefix + 'MODAL_HIDE'
};

Emitter.TYPE = TYPE;

export default Emitter;