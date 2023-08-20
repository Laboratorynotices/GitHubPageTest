<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { navElements } from "@/menu-elements";
// Удалить
const links = ["Dashboard", "Messages", "Profile", "Updates"];
</script>

<template>

  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

        <!-- Навигация из файла App.vue -->
        <nav>
          <RouterLink
            v-for="(navElement, i) in navElements"
            :key="i"
            :to="navElement.path"
          >{{ navElement.nameMenu }}</RouterLink>
        </nav>

        <v-btn v-for="link in links" :key="link" variant="text">
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

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

  <v-divider class="border-opacity-100" color="success"></v-divider>

  <div v-if="false">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink
            v-for="(navElement, i) in navElements"
            :key="i"
            :to="navElement.path"
          >{{ navElement.nameMenu }}</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
