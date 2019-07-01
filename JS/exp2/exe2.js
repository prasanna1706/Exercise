class Day {
  constructor() {
    this.b = document.getElementsByTagName('input');
    this.ln = this.b.length;
    this.c = document.getElementById('cb8');
    for (let j = 0; j < this.ln; j++) {
      this.b[j].addEventListener('click', this.check.bind(this));
    }
  }

  check(e) {
    let p = 0;
    if (this.c.checked == true && e.currentTarget == this.c) {
      for (let i = 0; i < this.ln - 1; i++) {
        this.b[i].checked = false;
      }
    } else if (e.currentTarget != this.c) {
      this.c.checked = false;
    }
    for (let i = 0; i < this.ln; i++) {
      if (this.b[i].checked == true) p = p + 1;
    }
    if (p > 3) {
      e.currentTarget.checked = false;
      alert('only 3 can be selected');
    }
  }
}
const obj = new Day();

