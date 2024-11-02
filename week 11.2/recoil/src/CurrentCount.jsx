function CurrentCount() {
    const count = useRecoilValue(counterAtom);
    return <div>
      {count}
    </div>
  }