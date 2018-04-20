////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import EventSystem from "../../../src/game/systems/event-system";
import {expect} from 'chai';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// Test
////////////////////////////////////////////////////////////////////////////////
describe('EventSystem', () => {

  describe('#get', () => {
    const EVENT_SYSTEM = EventSystem.create();
    const EVENT = {time: 0};

    it('should return an added event', () => {
      EVENT_SYSTEM.add(EVENT);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT);
    });

    it('should return null when the queue is empty', () => {
      expect(EVENT_SYSTEM.get()).to.equal(null);
    });

    it('should remove returned events', () => {
      EVENT_SYSTEM.add(EVENT);
      EVENT_SYSTEM.get();
      expect(EVENT_SYSTEM.get()).to.equal(null);
    });

    it('should return events in the correct order', () => {
      const EVENT_ONE = {time: 1};
      const EVENT_TWO = {time: 2};

      EVENT_SYSTEM.add(EVENT_TWO);
      EVENT_SYSTEM.add(EVENT);
      EVENT_SYSTEM.add(EVENT_ONE);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT_ONE);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT_TWO);
    });

    it('should preserve the order added for events with the same time', () => {
      const EVENT_ONE = {body: 1, time: 0};
      const EVENT_TWO = {body: 2, time: 0};
      const EVENT_THREE = {body: 3, time: 0};

      EVENT_SYSTEM.add(EVENT_ONE);
      EVENT_SYSTEM.add(EVENT_TWO);
      EVENT_SYSTEM.add(EVENT_THREE);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT_ONE);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT_TWO);
      expect(EVENT_SYSTEM.get()).to.equal(EVENT_THREE);
    });
  });

  describe('#update', () => {
    const EVENT_SYSTEM = EventSystem.create();

    it('should send all events for the current time', () => {
      const EVENT_ONE = {body: 1, time: 1};
      const EVENT_TWO = {body: 2, time: 1};
      const EVENT_THREE = {body: 3, time: 2};

      EVENT_SYSTEM.add(EVENT_ONE);
      EVENT_SYSTEM.add(EVENT_TWO);
      EVENT_SYSTEM.add(EVENT_THREE);
      EVENT_SYSTEM.update();
      expect(EVENT_SYSTEM.get()).to.equal(EVENT_THREE);
    });

    it('should re-add repeated events', () => {
      const EVENT = {body: 1, time: 1, repeat: true};

      EVENT_SYSTEM.add(EVENT);
      EVENT_SYSTEM.update();
      expect(EVENT_SYSTEM.get()).to.equal(EVENT);
    });
  });

});
