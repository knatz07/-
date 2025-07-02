// mobile-drag.js

export function enableMobileDrag() {
  // Apply touch-friendly drag to all current .draggable items
  document.querySelectorAll('.draggable').forEach(el => {
    el.style.touchAction = 'none'; // Prevent page scroll/zoom while dragging
    el.addEventListener('pointerdown', onDragStart);
  });
}

let draggingEl = null;
let originParent = null;

function onDragStart(ev) {
  draggingEl = ev.currentTarget;
  originParent = draggingEl.parentElement;

  draggingEl.classList.add('dragging');
  draggingEl.setPointerCapture(ev.pointerId);

  draggingEl.addEventListener('pointermove', onDragMove);
  draggingEl.addEventListener('pointerup', onDragEnd);
}

function onDragMove(ev) {
  // Move the card with the finger/cursor
  draggingEl.style.position = 'fixed';
  draggingEl.style.left = `${ev.clientX - draggingEl.offsetWidth / 2}px`;
  draggingEl.style.top = `${ev.clientY - draggingEl.offsetHeight / 2}px`;

  // Highlight potential drop zone under pointer
  document.querySelectorAll('.drop-zone').forEach(zone => {
    const isTarget = zone === document.elementFromPoint(ev.clientX, ev.clientY)?.closest('.drop-zone');
    zone.classList.toggle('highlight', isTarget);
  });
}

function onDragEnd(ev) {
  const targetZone = document.elementFromPoint(ev.clientX, ev.clientY)?.closest('.drop-zone');

  // Clear visual state
  draggingEl.classList.remove('dragging');
  draggingEl.style = '';
  document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('highlight'));

  // Place in target zone if valid and empty; otherwise return to origin
  if (targetZone && !targetZone.querySelector('.draggable')) {
    targetZone.appendChild(draggingEl);
    targetZone.classList.add('filled');
  } else {
    originParent.appendChild(draggingEl);
  }

  // Clean up handlers
  draggingEl.removeEventListener('pointermove', onDragMove);
  draggingEl.removeEventListener('pointerup', onDragEnd);
  draggingEl.releasePointerCapture(ev.pointerId);

  draggingEl = originParent = null;
}
