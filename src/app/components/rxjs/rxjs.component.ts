import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EMPTY, forkJoin, from, fromEvent, interval, Observable, of, range, Subscription, throwError } from 'rxjs';
import { catchError, concatMap, debounceTime, delay, distinctUntilChanged, filter, finalize, map, mergeMap, retry, retryWhen, switchMap, take, takeUntil, tap, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {
  test?: Subscription;
  constructor(private fb: FormBuilder) {
    const search = this.form.get('movieSearch');

    const data = search?.valueChanges.pipe(
      filter(x => x.length > 3),
      debounceTime(400),
      // distinctUntilChanged(),
      concatMap(searchTerm => {
        console.log(searchTerm);
        return of([1, 2, 3]);
      })
    );

    data?.subscribe(x => console.log(x));

  }

  form = this.fb.group({
    movieSearch: ['']
  });

  ngOnDestroy(): void {
    this.test?.unsubscribe();
  }

  ngOnInit(): void {
    // this.createObservables();
    // this.travelApp();
    // this.getUserWithTweets();
    // this.errorHandelingDemo();
    // this.retryingDemo();
    // this.timeOutDemo();

    // this.test = interval(1000).subscribe(data => {
    //   // do something with data
    //   console.log('get next value: ', data);
    // });

    // // interval(1000).pipe(take(10)).subscribe(data => {
    // //   // do something with data
    // //   console.log('get next value: ', data);
    // // });

    // const clicks = fromEvent(document, 'click');
    // interval(1000).pipe(takeUntil(clicks)).subscribe(data => {
    //   // do something with data
    //   console.log('get next value: ', data);
    // });
  }

  createObservables(): void {
    console.log('of');

    // triggers console.log() for each emited value
    of(1, 2, 3).subscribe(data => {
      // do something with data
      console.log('get next value: ', data);
    });

    // array triggers once
    of([1, 2, 3]).subscribe(data => {
      // do something with data
      console.log('get next value: ', data);
    });

    console.log('from');
    // from(1, 2, 3).subscribe(data => {
    //   // do something with data
    //   console.log('get next value: ', data);
    // });

    from([1, 2, 3]).subscribe(data => {
      // do something with data
      console.log('get next value: ', data);
    });

    console.log('range');
    range(1, 10).subscribe(data => {
      // do something with data
      console.log('get next value: ', data);
    });

    console.log('interval');
    interval(1000).subscribe(data => {
      // do something with data
      console.log('get next value: ', data);
    });
  }

  travelApp(): void {
    const startDates = [];
    const startDate = new Date();

    for (let day = -2; day <= 2; day++) {
      const date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + day
      );

      startDates.push(date);
      // tip from Kevin (dive into immutable arrays and objects)
      // https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript
    }

    const data = from(startDates).pipe(switchMap(day => {
      console.log(`getting deals for ${day}`);
      return of([1, 2, 3]);
    }));

    data.subscribe(x => {
      // do something with data
      console.log('get next value: ', x);
    });
  }

  getUserWithTweets(): void {
    const userStream = of({ userId: 1, UserName: 'Thomas', tweets: [] }).pipe(delay(2000));
    const tweetStream = of([1, 2, 3]).pipe(delay(1500));

    forkJoin([userStream, tweetStream])
      .pipe(
        tap(data => console.log(data)),
        map(data => new Object({ user: data[0], tweets: data[1] }))
      )
      .subscribe(x => {
        // do something with data
        console.log('get next value: ', x);
      });
  }

  errorHandelingDemo(): void {
    const myObservable = throwError(new Error('Something failed'));

    // myObservable.subscribe(

    // );

    myObservable.pipe(catchError(err => {
      // console.error(err);
      return EMPTY;
    })).subscribe(x => console.log('next value', x), err => console.error(err));
  }

  retryingDemo(): void {
    let counter = 0;
    const httpCall = of('url').pipe(
      concatMap(() => {
        if (++counter < 3) {
          return throwError(new Error('request failed'));
        }
        return of([1, 2, 3]);
      })
    );

    // httpCall.pipe(retry(2)).subscribe(x => console.log('next value', x), err => console.error(err));

    // Met delay
    let retryCounter = 0;
    httpCall.pipe(retryWhen(errors => errors.pipe(delay(1000), map(error => {
      if (++retryCounter === 2) {
        throw error;
      }

      return error;

    })))).subscribe(x => console.log('next value', x), err => console.error(err));
  }

  timeOutDemo(): void {
    const remoteStream = of([4, 5, 6]).pipe(delay(5000));

    remoteStream.pipe(timeout(7000)).subscribe(
      x => console.log('next value', x),
      err => console.error(err));
  }

}
