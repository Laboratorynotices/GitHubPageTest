<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/LayoutsConstrainedNavBar.vue';
</script>

<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col v-if="false" cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-title>List Item {{ n }}</v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>Refresh</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!-- Подключение страниц маршрутизатором из файла App.vue -->
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
