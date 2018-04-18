import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    });

    it('should have no messages to start', () => {
        expect(service.messages.length).toBe(0);
    });

    describe('add', () => {
        it('should add a message', () => {
            service.add('test');
            expect(service.messages.length).toBe(1);
        });

        it('should add two messages', () => {
            service.add('test1');
            service.add('test2');
            expect(service.messages.length).toBe(2);
        });
    });

    describe('clear', () => {
        // it('should not create a new array', () => {
        //     service.messages
        // });

        it('should clear all messages', () => {
            service.messages = ['test1', 'test2'];
            service.clear();
            expect(service.messages.length).toBe(0);
        });
    });
});