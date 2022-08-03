<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand>
        <b-button v-b-toggle.sidebar-backdrop pill class="m-3 pl-4 pr-4 pt-2 pb-2">
          {{ variant }}
        </b-button>
      </b-navbar-brand>
    </b-navbar>
    <b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="dark"
      bg-variant="dark"
      text-variant="light"
      backdrop
    >
      <div class="px-3 py-2">
        <b-form-group label="Connected Account" label-for="backdrop-variant">
          <b-form-select id="backdrop-variant" v-model="variant" :options="variants" />
        </b-form-group>
        <b-list-group v-if="variant === 'Administrator' ">
          <b-list-group-item href="#" active>
            Data Guru dan Siswa
          </b-list-group-item>
        </b-list-group>
        <b-list-group v-else>
          <b-list-group-item href="#" active>
            Nilai Siswa
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
    <div v-if="variant === 'Administrator' ">
      <b-card no-body header="Daftar Guru">
        <b-list-group flush>
          <b-list-group-item v-for="guru in $store.state.guru" :key="guru.nama" href="#">
            {{ guru.nama }} ({{ guru.usia }})
          </b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card no-body header="Daftar Siswa">
        <b-list-group flush>
          <b-list-group-item v-for="siswa in $store.state.siswa" :key="siswa.nama" href="#">
            {{ siswa.nama }} ({{ siswa.usia }})
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div v-if="variant.includes('Guru')">
      <b-card v-for="siswa in $store.state.siswa" :key="siswa.nama" no-body :header="siswa.nama">
        <b-list-group flush>
          <b-list-group-item v-for="mapel in siswa.pelajaran" :key="mapel.nama" href="#">
            {{ mapel.nama }}: {{ mapel.nilai }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div v-if="variant.includes('Siswa')">
      <b-card no-body header="Nilai Siswa">
        <b-list-group v-for="siswa in $store.state.siswa" :key="siswa.nama" flush>
          <span v-if="'Siswa - ' + siswa.nama === variant">
            <b-list-group-item v-for="mapel in siswa.pelajaran" :key="mapel.nama" href="#">
              {{ mapel.nama }}: {{ mapel.nilai }}
            </b-list-group-item>
          </span>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      variant: 'Administrator',
      variants: [
        'Administrator',
        'Guru - Muhajir Subroto S. Pd.',
        'Siswa - Subhan Malik',
        'Siswa - Andre Palikan',
        'Siswa - Thoriq Al Mahdi'
      ]
    }
  }
}
</script>
