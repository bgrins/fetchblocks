import {
  assertEquals,
  assertObjectMatch,
  assert,
} from "https://deno.land/std@0.137.0/testing/asserts.ts";

import table_to_csv from "./utils/table_to_csv.js";

const listOfPopularDogBreeds = Deno.readTextFileSync(
  "./testdata/list-of-popular-dog-breeds.html"
);

Deno.test("fetchblocks - builtins", async () => {
  assertEquals(
    table_to_csv({
      input: `<table>
      <thead>
          <tr>
          <th colspan="2">The table header</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>The table body</td>
              <td>with two columns</td>
          </tr>
      </tbody>
  </table>`,
      options: {
        includeheaders: false,
      },
    }),
    `"The table body","with two columns"`
  );
  assertEquals(
    table_to_csv({
      input: `<table>
      <thead>
          <tr>
          <th colspan="2">The table header</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>The table body</td>
              <td>with two columns</td>
          </tr>
      </tbody>
  </table>`,
      options: {
        includeheaders: true,
      },
    }),
    `"The table header","The table header"
"The table body","with two columns"`
  );
  assertEquals(
    table_to_csv({
      input: `<table>
        <thead>
            <tr>
            <th>The table header 1</th>
            <th>The table header 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The table body</td>
                <td>with two columns</td>
            </tr>
        </tbody>
    </table>`,
      options: {
        includeheaders: true,
      },
    }),
    `"The table header 1","The table header 2"
"The table body","with two columns"`
  );
  assertEquals(
    table_to_csv({
      input:
        "<table><tr><td>1</td><td>2</td></table><table class='secondary'><tr><td>3</td><td>4</td></table>",
      options: {
        tableSelector: "table.secondary",
      },
    }),
    '"3","4"'
  );
  assertEquals(
    table_to_csv({
      input: listOfPopularDogBreeds,
      options: {
        tableSelector: "table.wikitable:nth-child(21)",
      },
    }),
    `"Position","Breed"
"1","Golden retriever"
"2","German Shepherd"
"3","Husky"
"4","Pug"
"5","Brittany"
"6","Segugio Italiano"
"7","Golden Retriever"
"8","Boxer"
"9","Jack Russell Terrier"
"10","German Shorthaired Pointer"`);


  assertEquals(
    table_to_csv({
      input: listOfPopularDogBreeds,
      options: {
        tableSelector: "table.wikitable:nth-child(25)",
        includeheaders: true,
      },
    }),
    `"Position","Breed","Registrations"
"1","Labrador Retriever","191,988"
"2","German Shepherd Dog","129,186"
"3","Poodle (All sizes)","118,653"
"4","Chihuahua","107,114"
"5","Golden Retriever","92,994"
"6","Yorkshire Terrier","92,438"
"7","Dachshund (all varieties)","81,516"
"8","Beagle","53,938"
"9","Boxer","52,983"
"10","Miniature Schnauzer","45,263"
"11","Shih Tzu","44,564"
"12","Bulldog","44,325"
"13","German Spitz (all sizes)","40,530"
"14","English Cocker Spaniel","40,174"
"15","Cavalier King Charles Spaniel","39,670"
"16","French Bulldog","39,337"
"17","Pug","33,528"
"18","Rottweiler","31,447"
"19","English Setter","29,771"
"20","Maltese","28,909"
"21","English Springer Spaniel","28,050"
"22","German Shorthaired Pointer","23,855"
"23","Staffordshire Bull Terrier","23,562"
"24","Border Collie","23,262"
"25","Shetland Sheepdog","22,805"
"26","Dobermann","20,941"
"27","West Highland White Terrier","20,904"
"28","Bernese Mountain Dog","20,423"
"29","Great Dane","20,001"
"30","Brittany Spaniel","19,828"`
  );
});
