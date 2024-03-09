/**
 * Record
 */
type UtilityType = Record<string, number>; // === type UtilityType = { [x: string]: number; }

/**
 * Pick
 */
type Car = { name: string; speed: number; color: string };
type PickedType = Pick<Car, 'name' | 'speed'>; // === type PickedType = { name: string; speed: number; }

/**
 * Omit
 */
type OmittedType = Omit<Car, 'name' | 'speed'>; // === type OmittedType = { color: string; }

/**
 * Extract
 */
type ExtractUnion = string | number | boolean | {};
type ExtractUnion2 = 'hello' | 'world' | 1 | 999 | null;

type TestExtract = Extract<ExtractUnion, string>; // === type TestExtract = string
type TestExtract2 = Extract<ExtractUnion2, string>; // === type TestExtract2 = "hello" | "world"
type TestExtract3 = Extract<ExtractUnion2, string | number>; // === type TestExtract3 = "hello" | "world" | 1 | 999

function isNumberExtract<T>(value: T): value is Extract<T, number> {
  return typeof value === 'number';
}

const extractArray = [1, 2, 3, 'hello', 4, 'world'];
const testExtractArrayFilter = extractArray.filter(isNumberExtract); // === const testExtractArrayFilter: number[] = [1, 2, 3, 4];

/**
 * Exclude
 */
type ExcludeUnion = string | number | boolean | {};
type ExcludeUnion2 = 'hello' | 'world' | 1 | 999 | null;

type TestExclude = Exclude<ExcludeUnion, string>; // === type TestExclude = number | boolean | {}
type TestExclude2 = Exclude<ExcludeUnion2, string>; // === type TestExclude2 = 1 | 999 | null
type TestExclude3 = Exclude<ExcludeUnion2, string | number>; // === type TestExclude3 = null

/**
 * NonNullable
 */
type NonNullableUnion = string | number | boolean | {};
type NonNullableUnion2 = 'hello' | 'world' | 1 | 999 | null;

type TestNonNullable = NonNullable<NonNullableUnion>; // === type TestNonNullable = string | number | boolean | {}
type TestNonNullable2 = NonNullable<NonNullableUnion2>; // === type TestNonNullable2 = 1 | "hello" | "world" | 999

/**
 * Partial
 */
type TestPartial = Partial<{ a: number; b: string }>; // === type TestPartial = { a?: number | undefined; b?: string | undefined; }

interface PartialConfig {
  firstProp: string;
  secondProp: number;
}

const partialObj: Partial<PartialConfig> = {}; // here we can create an empty object

/**
 * Required
 */
type TestRequired = Required<{ a?: number | undefined; b?: string | undefined | null }>; // === type TestRequired = { a: number; b: string | null; }

interface RequiredConfig {
  firstProp?: string;
  secondProp?: number;
}

// const requiredObj: Required<RequiredConfig> = {}; // Type '{}' is missing the following properties from type 'Required<RequiredConfig>': firstProp, secondPropts(2739)

/**
 * Readonly
 */
type ReadonlyType = Readonly<{ a: number; b: string; d: { e: boolean } }>;
// type ReadonlyType = { readonly a: number; readonly b: string; readonly d: { e: boolean; }; }

/**
 * Parameters
 */
type AnyFunction = (...args: any[]) => any;
type FunctionParams = Parameters<(a: number, b: string) => void>;

function wrapper<Fn extends AnyFunction>(fn: Fn) {
  return function wrappedFunction(...args: Parameters<Fn>) {
    return fn.apply(null, args);
  };
}

const log = (a: number, b?: boolean) => console.log(a, b);
const wrappedLog = wrapper(log); // === const wrappedLog: (a: number, b?: boolean | undefined) => any

/**
 * ReturnType
 */
type MyReturnType = ReturnType<() => number>; // === type MyReturnType = number
type MyReturnType2 = ReturnType<() => string>; // === type MyReturnType2 = string

interface MyStore {
  people: { name: string }[];
  getStore: () => MyStore;
}

const myStore: MyStore = {
  people: [],
  getStore: function () {
    return this;
  },
};

export type UnknownStoreType = ReturnType<typeof myStore.getStore>; // === type StoreType = Store;

/**
 * Awaited
 */
type NumberPromise = Promise<number>;
type StringPromise = Promise<string>;

type TypeOfNumberPromise = Awaited<NumberPromise>; // === type TypeOfNumberPromise = number
type TypeOfStringPromise = Awaited<StringPromise>; // === type TypeOfStringPromise = string

/**
 * ThisType
 */

interface DefineComponentOptions<Data extends Record<string, unknown>, Methods extends Record<string, AnyFunction>> {
  data: Data;
  methods: Methods & ThisType<Data & Methods>;
}

function defineComponent<Data extends Record<string, unknown>, Methods extends Record<string, AnyFunction>>({
  data,
  methods,
}: DefineComponentOptions<Data, Methods>) {
  return { ...data, ...methods };
}

const componentInstance = defineComponent({
  data: {
    count: 0,
    loading: false,
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
});

/**
 * Uppercase | Lowercase | Capitalize | Uncapitalize
 */

type TestUppercase = Uppercase<"abcdef">; // === type TestUppercase = "ABCDEF"
type TestLowercase = Lowercase<"ABCDEF">; // === type TestLowercase = "abcdef"
type TestCapitalize = Capitalize<"abcdef">; // === type TestCapitalize = "Abcdef"
type TestUncapitalize = Uncapitalize<"Abcdef">; // === type TestUncapitalize = "abcdef"

