const Note = {
  props: ['id'],
  data: function () {
    return {
      note: {
        title: '',
        text: '',
        date: ''
      }
    }
  },
  mounted: function () {
    db.collection('notes')
      .doc(this.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.note.title = doc.data().title
          this.note.text = doc.data().text
          this.note.date = doc.data().date
        } else {
          console.log('No note found')
        }
      })
  },
  template: `
    <section class="row">
      <div class="col-12">
        <p>{{ note.date }}</p>
        <h1 class="display-4">{{ note.title }}</h1>
        <p>{{ note.text }}</p>
      </div>
    </section>
  `
}
