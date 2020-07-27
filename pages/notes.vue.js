const Notes = {
  data: function () {
    return {
      notes: [],
    }
  },
  mounted: function () {
    db.collection("notes").onSnapshot((snapshot) => {
      const data = []
      snapshot.forEach((doc) =>
        data.push({
          title: doc.data().title,
          text: doc.data().text,
          date: doc.data().date,
          id: doc.id,
        })
      )

      this.notes = data
    })
  },
  template: `
  <section class="row">
    <div class="col-12">
      <h1 class="display-4">Notes</h1>
    </div>
    <div class="col-12">
      <ul class="list-group">
        <li v-for="note in notes" class="list-group-item"><router-link :to="'/note/' + note.id">{{ note.title }}</router-link></li>
      </ul>
    </div>
  </section>
  `,
}
