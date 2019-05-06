class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  _leftChild(ind) {
    return (ind * 2) + 1;
  }

  _rightChild(ind) {
    return (ind * 2) + 2; 
  }

  _swap(i, j) {
    const aux = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = aux;
  }

  _pop() {
    return this.heap.pop();
  }

  _bubbleDown(ind) {    
    const length = this.heap.length;
    const heap = this.heap;

    while (true) {
      const lc = this._leftChild(ind);
      const rc = this._rightChild(ind);
      if (lc >= length && rc >= length) {
        break;
      }
     
      if (lc >= length) {
        replace = rc;
      } else if (rc >= length) {
        replace = lc;
      } else {
        replace = Math.min(lc, rc, ...this.heap);
      }

      if (heap[replace] > heap[ind]){
        this._swap(ind, replace);
        ind = replace;
      } else {
        break;
      }
    }
  }

  _parent(ind) {
    return Math.floor((ind - 1) / 2);
  }

  _bubbleUp(ind) {
    let par = this._parent(ind);
    let heap = this.heap;

    while (par >= 0) {
      if (heap[ind].priority > heap[par].priority) {
        this._swap(ind, par);
        ind = par;
        par = this._parent(ind);
      } else {
        break;
      }
    }
  }

  push(ele, priority) {
    this.heap.push({ priority: priority, ele: ele });
    this._bubbleUp(this.heap.length - 1);
  }

  isEmpty() {
    return !this.heap || this.heap.length === 0;
  }


  pop() {
    if (this.isEmpty()) {
      console.log("get from empty heap");
      return;
    }
    this._swap(0, this.heap.length - 1);
    const obj = this._pop();
    this._bubbleDown(0);
    return obj;
  }

  peek() {
    const obj = this.heap[0];
    return obj;
  }

  length() {
    return this.heap.length;
  }
}

function distance(p1, p2) {
  const x1 = p1.x;
  const y1 = p1.y;
  const x2 = p2.x;
  const y2 = p2.y;
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}  

function nearestKPoints(points, center, k) {
  if (points.length <= k) {
    return points;
  }
  
  const pq = new PriorityQueue();

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    if (pq.length() < k) {
      pq.push(point, distance(point, center));
    } else {
      dist = distance(point, center);
      if (dist < pq.peek().priority) {
        pq.pop();
        pq.push(point, dist);
      }
    }
  }

  const result = [];
  let i = 0;
  while (i < k) {
    result.push(pq.pop().ele);
    i++;
  }
    
  return result;
}

const points = [ { x: 0, y: 0 }, { x: 5, y: 4 }, { x: 3, y: 1 } ];
const center = { x: 1, y: 2 };
console.log(nearestKPoints(points, center, 2));