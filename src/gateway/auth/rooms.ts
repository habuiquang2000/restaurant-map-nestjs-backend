import { Server } from 'socket.io';
import { TimerEvents } from './events';
const userTimers = {}; // To keep track of timers for each user.

export function getUserDeviceRoom(userId: any, deviceId: string) {
  return `user:${userId}-device:${deviceId}`;
}

export function sendToUserDevice(
  server: Server,
  userId: string,
  deviceId: string,
  event: string,
  payload: any,
) {
  server.to(getUserDeviceRoom(userId, deviceId)).emit(event, payload); // Actually send the message to the user device via WebSocket channel.
}

export function startTimerForUserDevice(
  server: Server,
  userId: string,
  deviceId: string,
  dur: number,
) {
  let counter = dur; // Set initial counter value to timer duration `dur` (in seconds).

  const timer = setInterval(function () {
    console.log(`counting ${counter}`);

    sendToUserDevice(server, userId, deviceId, TimerEvents.tick.toString(), {
      timer: counter,
    }); // Send tick message to user device.

    if (counter > 0) {
      counter--;
    } else {
      // Stop timer for this user.
      console.log(`user ${userId} has a timeout`);
    }
  }, 1000);

  userTimers[userId + deviceId] = timer; // Store timer for this user device.
}

export function stopTimerForUserDevice(userId: string, deviceId: string) {
  clearInterval(userTimers[userId + deviceId]); // Stop the timer for this user device.

  delete userTimers[userId + deviceId]; // Delete the timer for this user device from the `userTimers` object.
}
